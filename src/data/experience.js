import { ExperienceType } from "$lib/enums/ExperienceType";
import { skills } from "./skills";

export const experienceItems = [
    {
        key: "namkin",
        type: ExperienceType.PERMANENT,
        tags: [
            skills.react,
            skills.project_management,
            skills.nest,
            skills.autonomy,
            skills.python,
            skills.typescript,
            skills.medusajs,
            skills.docker,
            skills.postgresql,
        ],
        externalLink: "https://namkin.fr/",
        readMore: false,
        featured: true,
    },
    {
        key: "selectra",
        type: ExperienceType.INTERNSHIP,
        tags: [
            skills.laravel,
            skills.vue,
            skills.metabase,
            skills.ui_ux,
            skills.datadog,
            skills.semaphore,
            skills.sentry,
        ],
        externalLink: "https://careers.selectra.com/",
        readMore: false,
    },
    {
        key: "grytics",
        type: ExperienceType.INTERNSHIP,
        tags: [skills.machinelearning, skills.react, skills.python, skills.researchanddevelopment],
        externalLink: "https://grytics.com/",
        readMore: false,
    },
];
