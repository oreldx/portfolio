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
