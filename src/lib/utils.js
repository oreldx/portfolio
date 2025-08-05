import fs from "fs";
import path from "path";
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

export const fetchMarkdownFiles = (type, key) => {
    const markdown = locales.reduce((acc, locale) => {
        const filePath = path.resolve(`static/contents/${type}/${key}_${locale}.md`);
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, "utf-8");
            acc[locale] = content;
        }
        return acc;
    }, {});
    if (Object.keys(markdown).length === 0) {
        throw new Error("No markdown files found for this project");
    }
    return markdown;
};
