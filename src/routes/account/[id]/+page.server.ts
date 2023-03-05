import {db} from "../../../utils/db.server";
import type {LoadEvent} from "@sveltejs/kit";

/** @type {import('../../../../.svelte-kit/types/src/routes').PageLoad} */
export async function load({params}: LoadEvent<{id: string}>) {
    const account = await db.account.findUnique({
            where: {
                userId: parseInt(params.id)
            },
            include: {
                transactions: true
            }
        }
    )

    return {
        account: account,
    };
}
