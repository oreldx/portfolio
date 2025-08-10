import { ProjectType } from "$lib/enums/ProjectType";
import { skills } from "./skills";

export const projectsItems = [
    {
        key: "social_network_account",
        type: ProjectType.PERSONAL,
        tags: [
            skills.flask,
            skills.vue,
            skills.nodejs,
            skills.redis,
            skills.celery,
            skills.docker,
            skills.ui_ux,
            skills.creativity,
        ],
        readMore: true,
    },
    {
        key: "portfolio",
        type: ProjectType.PERSONAL,
        tags: [skills.svelte, skills.ui_ux, skills.tailwind, skills.creativity],
        readMore: false,
        externalLink: "https://github.com/oreldx/portfolio",
    },
    {
        key: "machine_learning_model",
        type: ProjectType.ACADEMIC,
        tags: [
            skills.python,
            skills.researchanddevelopment,
            skills.machinelearning,
            skills.data_manipulation,
        ],
        readMore: false,
        externalLink: "https://github.com/oreldx/TDT4173_Project",
    },
    {
        key: "auto_youtube_channel",
        type: ProjectType.PERSONAL,
        tags: [
            skills.python,
            skills.ffmpeg,
            skills.ui_ux,
            skills.apis,
            skills.docker,
            skills.scrapping,
            skills.creativity,
        ],
        readMore: true,
        featured: true,
    },
    {
        key: "dynamic_website",
        type: ProjectType.ACADEMIC,
        tags: [skills.html, skills.css, skills.php, skills.mysql],
        readMore: false,
        externalLink: "https://github.com/oreldx/LO07_Project",
    },
];
