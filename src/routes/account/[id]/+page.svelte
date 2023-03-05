<script>
    import History from "$lib/History.svelte";
    import {showUser} from "$lib/stores/user.store.ts";
    /** @type {import('../../../../.svelte-kit/types/src/routes').PageData} */
    export let data;

</script>
<div class="mb-10">
    <a class="btn btn--secondary" href="/">Back</a>
</div>

<h1>Account of {$showUser.firstName} {$showUser.lastName}</h1>
<h2>Balance: ${data?.account?.balance}</h2>
<History transactions={data?.account?.transactions}/>
