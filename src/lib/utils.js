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
            return "text-amber-200 border-amber-200";
        case "soft":
            return "text-pink-300 border-pink-300";
        case "bridge":
            return "text-cyan-300 border-cyan-300";
        default:
            return "text-gray-500 border-gray-600";
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
