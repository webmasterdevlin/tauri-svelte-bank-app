import type {Actions, RequestEvent} from "@sveltejs/kit";
import {db} from "../../../utils/db.server";

export const prerender = false;
/** @type {import('./$types').Actions} */
export const actions: Actions = {
    default: async ({request}: RequestEvent) => {
        const form = await request.formData();
        const firstName = form.get('firstName') as string;
        const lastName = form.get('lastName') as string;
        const email = form.get('email') as string;
        const password = form.get('password') as string;
        return db.user.create({
            data: {
                firstName,
                lastName,
                email,
                password,
                account: {
                    create:
                        {
                            balance: 0
                        }
                }
            }
        });
    }
};
