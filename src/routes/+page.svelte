<script lang="ts">
    import {goto} from '$app/navigation';
    import {onMount} from "svelte";
    import {userStore} from "$lib/stores/user.store.ts";

    const confirmAuth = async () => {
        await userStore.subscribe(async (store) => {
            if (!store.user) {
                await goto('/auth');
            }
        });
    }

    onMount(async () => {
        await confirmAuth();
    });

</script>

<h1>Beaver Bank</h1>
{#if $userStore.user}
    <button on:click={userStore.logOutUser}>Logout</button>
{/if}

<section class="flex h-screen flex-col items-center justify-center">
    <nav class="grid grid-cols-2 grid-rows-2">
        <a class="btn btn--primary" href={`/account/${$userStore?.user?.id}`}>Account</a>
        <a class="btn btn--primary" href="/pay-bills">Pay Bills</a>
        <a class="btn btn--primary" href="/deposit">Deposit</a>
        <a class="btn btn--primary" href="/withdraw">Withdraw</a>
    </nav>
</section>
