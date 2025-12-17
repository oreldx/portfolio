import { writable } from "svelte/store";

export const showBurgerMenu = writable(false);

export const toggleBurgerMenu = () => {
    showBurgerMenu.update((value) => !value);
};

export const closeBurgerMenu = () => {
    showBurgerMenu.set(false);
};
