import {fail} from "@sveltejs/kit";
import type {Actions, RequestEvent} from "@sveltejs/kit";
import {db} from "../../utils/db.server";
import {withdrawMoney} from "../../helpers/compute";

export const prerender = false;
/** @type {import('./$types').Actions} */
export const actions: Actions = {
    default: async ({request}: RequestEvent) => {
        const form = await request.formData();
        const id = form.get('id') as string;
        const amount = form.get('amount') as string;

        const user: any = await db.user.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                account: true
            }
        });

        if (user.account.balance < parseInt(amount)) {
            return fail(401, {status: 401, message: 'Insufficient funds'});
        }

        const transaction = db.transaction.create({
            data: {
                amount: parseInt(amount),
                isDeposit: false,
                account: {
                    connect: {
                        userId: parseInt(id)
                    }
                }
            },
        });

        const account = db.account.update({
            where: {
                id: user.account.id
            },
            data: {
                balance: withdrawMoney(user.account.balance, parseInt(amount))
            },
            include: {
                transactions: true
            }
        })

        await db.$transaction([transaction, account])
    }
};
