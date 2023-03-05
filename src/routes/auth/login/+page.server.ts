import type {Actions, RequestEvent} from "@sveltejs/kit";
import {db} from "../../../utils/db.server";
import {fail} from "@sveltejs/kit";

export const prerender = false;
/** @type {import('./$types').Actions} */
export const actions: Actions = {
    default: async ({request}: RequestEvent) => {
        const form = await request.formData();
        const email = form.get('email') as string;
        const password = form.get('password') as string;
        const user = await db.user.findUnique({
            where: {
                email
            },
            include: {
                account: true
            }
        });

        if (user) {
            if (user.password === password) {
                return {user}
            } else {
                return fail(401, {status: 401, message: 'Invalid credentials'});
            }
        }
    }
};
