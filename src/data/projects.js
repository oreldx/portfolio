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
            skills.remotion,
            skills.redis,
            skills.celery,
            skills.mysql,
            skills.docker,
        ],
        readMore: true,
        featured: true,
    },
    {
        key: "portfolio",
        type: ProjectType.PERSONAL,
        tags: [skills.svelte, skills.ui_ux, skills.tailwind],
        readMore: false,
        externalLink: "https://github.com/oreldx/portfolio",
    },
    {
        key: "ml",
        type: ProjectType.ACADEMIC,
        tags: [skills.python, skills.researchanddevelopment],
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
            skills.sqlite,
            skills.creativity,
            skills.cron,
        ],
        readMore: true,
    },
    {
        key: "dw",
        type: ProjectType.ACADEMIC,
        tags: [skills.html, skills.css, skills.php, skills.mysql],
        readMore: false,
        externalLink: "https://github.com/oreldx/LO07_Project",
    },
];
