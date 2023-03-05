import type {Actions, RequestEvent} from "@sveltejs/kit";
import {db} from "../../utils/db.server";
import {depositMoney} from "../../helpers/compute";

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

        const transaction = db.transaction.create({
            data: {
                amount: parseInt(amount),
                isDeposit: true,
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
                balance: depositMoney(user.account.balance, parseInt(amount))
            },
            include: {
                transactions: true
            }
        })

        await db.$transaction([transaction, account])
    }
};
