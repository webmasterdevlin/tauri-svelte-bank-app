<script lang="ts">
    import {enhance} from '$app/forms';
    import {goto} from "$app/navigation";
    import {userStore} from "$lib/stores/user.store.ts";
</script>
<div class="mb-10">
    <a class="btn btn--secondary" href="/">Back</a>
</div>
<h1>Login</h1>
<form method="post" use:enhance={() => {
        return  async ({result}) => {
            if (result.type === 'success') {
                userStore.logInUser(result.data.user);
                await goto('/');
            } else {
               alert('Something went wrong!')
            }
        }
      }}>
    <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900" for="email">Your email</label>
        <input class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
               id="email"
               name="email"
               required
               type="email">
    </div>
    <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900" for="password">Your password</label>
        <input class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
               id="password"
               name="password"
               required
               type="password">
    </div>
    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit">
        Login
    </button>
</form>
