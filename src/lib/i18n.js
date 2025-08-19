import translations from "./translations";
import { derived, writable } from "svelte/store";

export const locale = writable("fr");
export const locales = Object.keys(translations);

function translate(locale, key, vars) {
    if (!key) throw new Error("no key provided to $t()");
    if (!locale) throw new Error(`no translation for key "${key}"`);

    const keyPath = key.split(".");
    let text = translations[locale];
    for (let i = 0; i < keyPath.length; i++) {
        if (text[keyPath[i]] === undefined) {
            return key;
        }
        text = text[keyPath[i]];
    }

    Object.keys(vars).forEach((k) => {
        const regex = new RegExp(`{{${k}}}`, "g");
        text = text.replace(regex, vars[k]);
    });

    return text;
}

export const t = derived(
    locale,
    ($locale) =>
        (key, vars = {}) =>
            translate($locale, key, vars),
);
