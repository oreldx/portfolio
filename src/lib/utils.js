import { locales } from "./i18n";

export const getIcon = (url) => {
    if (url.includes("github")) {
        return "mdi:github";
    }
    return "mdi:link";
};

export const getSkillColor = (type) => {
    switch (type) {
        case "hard":
            return "text-amber-200 border-amber-200 dark:bg-amber-200 dark:text-primary";
        case "soft":
            return "text-pink-300 border-pink-300 dark:bg-pink-300 dark:text-primary";
        case "bridge":
            return "text-cyan-300 border-cyan-300 dark:bg-cyan-300 dark:text-primary";
        default:
            return "text-gray-500 border-gray-600 dark:bg-gray-600 dark:text-primary";
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
