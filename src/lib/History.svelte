<script lang="ts">
    import {format} from "date-fns";

    export let transactions;
</script>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th class="px-6 py-3" scope="col">Date</th>
            <th class="px-6 py-3" scope="col">Action</th>
            <th class="px-6 py-3" scope="col">Amount</th>
        </tr>
        </thead>
        <tbody>
        {#each transactions as transaction, index}
            {#if index % 2 === 0}
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td class="px-6 py-4">{format(transaction?.createdAt, 'Pp')}</td>
                    <td class="px-6 py-4">{transaction?.isDeposit ? 'Deposited' : 'Withdrew'}</td>
                    <td class="px-6 py-4">{transaction?.isDeposit ? '+' : '-'}{transaction?.amount}</td>
                </tr>
            {:else}
                <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4">{format(transaction?.createdAt, 'Pp')}</td>
                    <td class="px-6 py-4">{transaction?.isDeposit ? 'Deposited' : 'Withdrew'}</td>
                    <td class="px-6 py-4">{transaction?.isDeposit ? '+' : '-'}{transaction?.amount}</td>
                </tr>
            {/if}
        {/each}
        </tbody>
    </table>
</div>
