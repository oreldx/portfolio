import { ExperienceType } from "$lib/enums/ExperienceType";
import { skills } from "./skills";

export const experienceItems = [
    {
        key: "namkin",
        type: ExperienceType.PERMANENT,
        tags: [
            skills.react,
            skills.typescript,
            skills.medusajs,
            skills.python,
            skills.docker,
            skills.postgresql,
        ],
        externalLink: "https://namkin.fr/",
        readMore: false,
    },
    {
        key: "selectra",
        type: ExperienceType.INTERNSHIP,
        tags: [
            skills.laravel,
            skills.vue,
            skills.inertia,
            skills.sentry,
            skills.datadog,
            skills.semaphore,
            skills.metabase,
        ],
        externalLink: "https://careers.selectra.com/",
        readMore: false,
    },
    {
        key: "grytics",
        type: ExperienceType.INTERNSHIP,
        tags: [
            skills.machinelearning,
            skills.react,
            skills.javascript,
            skills.python,
            skills.aws,
            skills.researchanddevelopment,
        ],
        externalLink: "https://grytics.com/",
        readMore: false,
    },
];
