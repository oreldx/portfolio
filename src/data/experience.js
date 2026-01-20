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
        evolutions: [
            {
                key: "test_implementation",
                icon: "mdi:test-tube",
            },
        ],
        metrics: [
            { value: "100", unit: "%", label: "frontend_technical_debt", icon: "mdi:check-all" },
            {
                value: "4",
                unit: "months",
                label: "ecommerce_project_delivery_time",
                icon: "mdi:calendar-clock",
            },
            { value: "+15", label: "major_features_delivered", icon: "mdi:feature-search" },
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
        metrics: [
            {
                value: "+20",
                unit: "%",
                label: "improvement_in_team_productivity",
                icon: "mdi:chart-line",
            },
            {
                value: "+4",
                label: "back-office_applications_major_features",
                icon: "mdi:application",
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
        metrics: [
            {
                value: "100%",
                label: "functional_tests_implementation",
                icon: "mdi:check-all",
            },
            {
                value: "+10",
                label: "ml_ai_pocs_developed",
                icon: "mdi:robot-industrial",
            },
        ],
        externalLink:
            "https://appsource.microsoft.com/fr-fr/product/saas/1339sas1609951272498.grytics?tab=overview",
        readMore: false,
    },
];
