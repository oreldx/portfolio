import { locales } from "./i18n";

export const getButtonDataFromURL = (url) => {
    if (url.includes("github")) {
        return { icon: "mdi:github", labelKey: "button.viewOnGitHub" };
    }
    return { icon: "mdi:web", labelKey: "button.viewWebsite" };
};

export const getSkillColor = (type) => {
    switch (type) {
        case "hard":
            return "bg-skill-hard-bg text-skill-hard-text border-skill-hard-border";
        case "soft":
            return "bg-skill-soft-bg text-skill-soft-text border-skill-soft-border";
        case "bridge":
            return "bg-skill-bridge-bg text-skill-bridge-text border-skill-bridge-border";
        default:
            return "bg-skill-neutral-bg text-skill-neutral-text border-skill-neutral-border";
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

export const splitSkillsByType = (skills) => {
    return skills.reduce((acc, skill) => {
        if (!acc[skill.type]) {
            acc[skill.type] = [];
        }
        acc[skill.type].push(skill);
        return acc;
    }, {});
};

export const skillTypeOrder = { hard: 0, bridge: 1, soft: 2 };

export function useBodyScrollLock(isLocked) {
    if (isLocked()) {
        document.body.style.overflow = "hidden";
        return;
    }
    document.body.style.overflow = "";
}
