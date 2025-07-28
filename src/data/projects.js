import { ProjectType } from "$lib/enums/ProjectType";
import { skills } from "./skills";

export const projectsItems = [
    {
        key: "sna",
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
    },
    {
        key: "ml",
        type: ProjectType.ACADEMIC,
        tags: [skills.python],
        readMore: false,
        externalLink: "https://github.com/oreldx/TDT4173_Project",
    },
    {
        key: "ayc",
        type: ProjectType.PERSONAL,
        tags: [
            skills.python,
            skills.sqlite,
            skills.docker,
            skills.cron,
            skills.apis,
            skills.ffmpeg,
        ],
        readMore: true,
    },
    {
        key: "dw",
        type: ProjectType.ACADEMIC,
        tags: [skills.html, skills.css, skills.php, skills.sql],
        readMore: false,
        externalLink: "https://github.com/oreldx/LO07_Project",
    },
];
