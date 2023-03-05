<script lang="ts">
    import {enhance} from '$app/forms';
    import {goto} from "$app/navigation";

    /** @type {import('./$types').ActionData} */
    export let form;
</script>
<div class="mb-10">
    <a class="btn btn--secondary" href="/">Back</a>
</div>

<h1>Register</h1>
<form
        method="POST"
        use:enhance={() => {
        return  async ({result}) => {
            if (result.type === 'success') {
                alert('Account created!')
                await goto('/auth/login');
            } else {
                alert('Something went wrong!')
            }
        }
      }}
>

    <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900" for="firstName">First Name</label>
        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
               id="firstName" name="firstName"
               type="text">
    </div>
    <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900" for="lastName">Last Name</label>
        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
               id="lastName" name="lastName"
               type="text">
    </div>
    <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900" for="email">Your email</label>
        <input class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
               id="email" name="email"
               required
               type="email">
    </div>
    <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900" for="password">Your password</label>
        <input class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
               id="password" name="password"
               required
               type="password">
    </div>
    <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900" for="repeat-password">Repeat password</label>
        <input class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
               id="repeat-password"
               required
               type="password">
    </div>
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
            <input class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" id="terms"
                   required
                   type="checkbox" value="">
        </div>
        <label class="ml-2 text-sm font-medium text-gray-900" for="terms">I agree with the <a
                class="text-blue-600 hover:underline"
                href="#">terms
            and conditions</a></label>
    </div>
    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit">
        Register new account
    </button>
</form>
