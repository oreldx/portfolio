import { locales } from "./i18n";

export const getButtonDataFromURL = (url) => {
    if (url.includes("github")) {
        return { icon: "mdi:github", text: "GitHub" };
    }
    return { icon: "mdi:link", text: null };
};

export const getSkillColor = (type) => {
    switch (type) {
        case "hard":
            return "text-primary dark:text-amber-200 dark:border-amber-200 bg-amber-200 dark:bg-transparent";
        case "soft":
            return "text-primary dark:text-pink-300 dark:border-pink-300 bg-pink-300 dark:bg-transparent";
        case "bridge":
            return "text-primary dark:text-cyan-300 dark:border-cyan-300 bg-cyan-300 dark:bg-transparent";
        default:
            return "text-primary dark:text-gray-500 dark:border-gray-600 bg-gray-600 dark:bg-transparent";
    }
};

export const fetchMarkdownFiles = async (eventFetch, type, key) => {
    const markdown = {};

    for (const locale of locales) {
        const fileUrl = type
            ? `/contents/${type}/${key}_${locale}.md`
            : `/contents/${key}_${locale}.md`;

        const response = await eventFetch(fileUrl);
        if (response.ok) {
            const content = await response.text();
            markdown[locale] = content;
        }
    }

    if (Object.keys(markdown).length === 0) {
        throw new Error("No markdown files found for this project");
    }
    return markdown;
};

export function useBodyScrollLock(isLocked) {
    if (isLocked()) {
        document.body.style.overflow = "hidden";
        return;
    }
    document.body.style.overflow = "";
}
