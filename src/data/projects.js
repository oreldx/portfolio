import { ProjectType } from "$lib/enums/ProjectType";
import { skills } from "./skills";

export const projectsItems = [
    {
        key: "quiz_yt",
        type: ProjectType.PERSONAL,
        tags: [skills.python, skills.remotion, skills.vue, skills.docker, skills.creativity],
        metrics: [
            {
                value: "+500",
                label: "subscribers/month",
                icon: "mdi:account-group",
            },
            {
                value: "5k",
                label: "average_views_per_video",
                icon: "mdi:eye",
            },
        ],
    },
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
        metrics: [{ value: "TOP 10", label: "rank_reach", icon: "mdi:trophy" }],
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
        metrics: [
            { value: "400", label: "videos_produced", icon: "mdi:video" },
            { value: "+300", label: "subscribers", icon: "mdi:account-group" },
            { value: "40k", label: "single_video_views", icon: "mdi:eye" },
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
