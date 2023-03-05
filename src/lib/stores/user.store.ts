import {writable, readable, derived, get} from "svelte/store";
import type {User} from "@prisma/client";

const initialState = {
    user: null as User | null,
    isLoggedIn: false,
};

export type BankUserStoreType = typeof initialState;

function createUserStore() {
    const {subscribe, update, set} = writable(initialState);


    return {
        subscribe,
        logInUser: (user: User) => {
            update(state => (state = {...state, user, isLoggedIn: true}));
        },
        logOutUser: () => {
            update((state: BankUserStoreType) => (state = {...state, user: null, isLoggedIn: false}));
        },
    };
}

export const userStore = createUserStore();

export const showUser = derived(
    userStore,
    $userStore => $userStore.user
);
