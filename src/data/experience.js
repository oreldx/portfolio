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
            skills.typescript,
            skills.python,
            skills.medusajs,
            skills.data_manipulation,
            skills.system_design,
            skills.docker,
            skills.graphql,
            skills.mongodb,
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
            skills.system_design,
            skills.sentry,
        ],
        externalLink: "https://careers.selectra.com/",
        readMore: false,
    },
    {
        key: "grytics",
        type: ExperienceType.INTERNSHIP,
        tags: [
            skills.machinelearning,
            skills.python,
            skills.researchanddevelopment,
            skills.cypress,
            skills.react,
        ],
        externalLink: "https://grytics.com/",
        readMore: false,
    },
];
