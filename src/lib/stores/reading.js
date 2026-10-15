import { writable } from "svelte/store";

export const readingMode = writable(false);
export const toggleReadingMode = () => readingMode.update((enabled) => !enabled);
