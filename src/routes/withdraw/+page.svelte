<script lang="ts">
    import {enhance} from '$app/forms';
    import {userStore} from "$lib/stores/user.store.ts";
    import {goto} from "$app/navigation";

</script>
<div class="mb-10">
    <a class="btn btn--secondary" href="/">Back</a>
</div>
<h1>Withdraw Works</h1>
<form method="post" use:enhance={() => {
        return  async ({result}) => {
           if (result.type === 'failure') {
             alert(result.data.message);
           } else {
             alert('Withdrawal successful!');
             await goto('/');
           }
        }
      }}>
    <div class="mb-10">
        <label class="block mb-2" for="amount">Amount</label>
        <input name="id" type="hidden" value={$userStore.user.id}/>
        <div class="flex">
            <p class="inline-flex items-center px-3 text-sm text-gray-40000 bg-gray-100 border border-r-0 border-gray-200 rounded-l-md dark:bg-gray-300 dark:text-gray-200 dark:border-gray-300">
                <span class="text-black">$</span>
            </p>
            <input class="block w-full border border-gray-400 rounded p-2" id="amount" min="0"
                   name="amount" required step="100" type="number"/>
        </div>
    </div>
    <div>
        <button class="btn btn--primary" type="submit">Withdraw</button>
    </div>
</form>
