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
            skills.agile,
        ],
        evolutions: [
            {
                key: "ecommerce_project_recovery",
                icon: "mdi:shopping",
            },
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
            skills.autonomy,
            skills.agile,
        ],
        evolutions: [
            {
                key: "productivity_increase",
                icon: "mdi:chart-line",
            },
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
        evolutions: [
            {
                key: "test_implementation",
                icon: "mdi:check-decagram",
            },
            {
                key: "ml_ai_pocs_developed",
                icon: "mdi:robot-industrial",
            },
        ],
        externalLink:
            "https://appsource.microsoft.com/fr-fr/product/saas/1339sas1609951272498.grytics?tab=overview",
        readMore: false,
    },
];
