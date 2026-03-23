export default {
    en: {
        summary: {
            about: {
                title: "Welcome",
                desc: "**Mid-level** (+2 years) software engineer full-stack. Based in _Lyon, France_ and enjoying **remote work**.",
                readMore: "Read full About",
            },
            project: {
                title: "Featured Project",
                readMore: "View all Projects",
            },
            experience: {
                title: "Featured Experience",
                readMore: "View all Experiences",
            },
            skills: {
                title: "Specilized Skills",
                readMore: "View all Skills",
            },
        },
        hero: {
            quote: "I dev stuff on the Web for the World",
            title: "Software Engineer",
            subtitle: "Full-Stack Development",
        },
        footer: {
            github: { text: "", label: "GitHub link" },
            mail: { text: "", label: "Mail address" },
            linkedin: { text: "", label: "Linkedin link" },
            resume: { text: "Resume", label: "Resume file", url: "/resume_en.pdf" },
        },
        button: {
            readMore: "Read More",
            viewOn: "View on",
            back: "Back",
        },
        nav: {
            home: "home",
            about: "about",
            experience: "experience",
            project: "projects",
            skills: "skills",
        },
        about: {
            title: "My profile",
            sections: {
                personal_info: {
                    title: "Who am I?",
                    items: [
                        "<strong>Aurélien Dureux</strong>",
                        "24 years old",
                        "<strong>Software Engineer</strong> (Full-Stack Development)",
                        "Graduate of the University of Technology of Troyes",
                        "<strong>+2.5 years of professional experience</strong>",
                        "<strong>+4 years of personal experience</strong> in side projects",
                        "Based in <strong>Lyon</strong>, France",
                        "Open to remote work",
                    ],
                },
                skills: {
                    title: "My skills",
                    items: [
                        "<strong>Full-stack</strong> developer",
                        "Experience in <strong>project management</strong>",
                        "Knowledge of <strong>DevOps</strong>",
                        "Understanding of <strong>client & user needs</strong>",
                        "Basics in <strong>UX/UI</strong>",
                        "<strong>Agile team</strong> work",
                        "<strong>French</strong> (native) and <strong>English</strong> (fluent)",
                    ],
                },
                hobbies: {
                    title: "My hobbies",
                    items: [
                        "<strong>Design</strong>: <em>FPV drones, 3D printing, electronics</em>",
                        "<strong>Sports</strong>: <em>Triathlon, climbing, calisthenics, hiking</em>",
                        "<strong>Audiovisual</strong>: <em>Graphic design, video editing</em>",
                    ],
                },
            },
        },
        project: {
            title: "My projects",
            type: { personal: "Personal", academic: "Academic" },
            gritprint: {
                date: "2026",
                title: "GritPrint",
                desc: "Web-based e-commerce platform that converts Strava activity data into personalized generative art posters, blending data and visual design.",
            },
            quiz_yt: {
                date: "2025",
                title: "Kids Quiz YouTube Channel",
                desc: "Semi-automated production of quiz original videos for children on YouTube",
                metrics: {
                    "subscribers/month": "subscribers/month",
                    average_views_per_video: "average views/video",
                },
            },
            social_network_account: {
                date: "2024",
                title: "Autonomous Social Network Accounts",
                desc: "Autonomous content production for multiple Instagram accounts",
            },
            portfolio: {
                date: "2023",
                title: "Personal Portfolio",
                desc: "Creation of a personal portfolio to showcase my projects and skills.",
            },
            machine_learning_model: {
                date: "2022",
                title: "Machine Learning Model",
                desc: "A machine learning model in Python to predict revenue of all types of retail stores in Norway",
                metrics: {
                    rank_reach: "rank reach",
                },
            },
            auto_youtube_channel: {
                date: "2022",
                title: "Autonomous Youtube Channel",
                desc: "Daily video production of the best Twitch clips to create a self-sustaining YouTube channel",
                metrics: {
                    videos_produced: "videos produced",
                    subscribers: "subscribers reached",
                    single_video_views: "single video views",
                },
            },
            dynamic_website: {
                date: "2021",
                title: "Dynamic Website",
                desc: "Vaccination site in HTML, CSS, PHP, SQL in MVC architecture",
            },
        },
        experience: {
            title: "My experience",
            namkin: {
                title: "Software Engineer - Namkin",
                desc: "Delivered B2B industrial web solutions — from a full e-commerce project recovery to a real-time factory visualization platform — working directly with clients on both technical and functional decisions.",
                date: "OCT 2024 - MAR 2026",
                evolutions: {
                    ecommerce_project_recovery: {
                        title: "E-commerce — Full project recovery for SEDIS",
                        desc: "Took over a stalled client e-commerce project end-to-end: functional scoping with the client, data migration from a legacy ERP (Python), full backend development (Medusa.js) and partial frontend (React) to reduce ordering friction for partners.",
                        result: "V1 delivered and validated by the client within 3 months, including product import, order synchronization, deployment, and successful onboarding of the first customers, reducing client order cycle time by 50%.",
                    },
                    industrial_visualization_platform: {
                        title: "Real-time industrial site visualization — Mecatherm",
                        desc: "Built front-end features (React, GraphQL) to turn raw industrial data into readable dashboards for operators. Developed admin features (NestJS) to streamline client/provider coordination, and created metric widgets tailored to operators' business context.",
                        result: "Delivered new analysis vectors for industrial operators, improving data readability and reducing coordination overhead between client and provider teams.",
                    },
                },
            },
            selectra: {
                title: "Software Engineer Intern - Selectra",
                desc: "Contributed to internal back-office web applications, including a tool designed to reduce time-consuming tasks for the quality team through AI integration, resulting in a 100% productivity gain.",
                date: "FEB 2024 - JUL 2024",
                evolutions: {
                    productivity_increase: {
                        title: "Back-office tool — Quality team productivity",
                        desc: "Segmented users by country to enable independent team and workflow management (Vue.js, Laravel). Built manual validation mechanisms for AI results to increase collaborator trust in automated processing. Identified and fixed bugs through monitoring (Datadog, Sentry) to stabilize the user experience.",
                        result: "100% productivity increase for the quality team, with more reliable AI-assisted workflows and a measurable reduction in recurring incidents.",
                    },
                },
            },
            grytics: {
                title: "Junior Development Engineer Intern - Grytics",
                desc: "Contributed to a B2B SaaS data analytics platform by identifying high-value AI use cases and securing deployment reliability through end-to-end testing.",
                date: "FEB 2023 - JUL 2023",
                evolutions: {
                    ml_ai_pocs_developed: {
                        title: "Machine Learning & Generative AI POCs",
                        desc: "Built multiple POCs (Python) using application data to explore ML and generative AI use cases with real business value potential.",
                        result: "Delivered 10+ innovative POCs, 2 of which were integrated into the main product roadmap.",
                    },
                    test_implementation: {
                        title: "End-to-end functional test coverage",
                        desc: "Designed and integrated end-to-end tests (React, Cypress) across critical user flows to prevent regressions and secure production deployments.",
                        result: "100% test coverage on critical paths, significantly reducing post-deployment bugs.",
                    },
                },
            },
            type: { internship: "Intern", permanent: "Permanent" },
        },
        skills: {
            title: "My skills",
            backend: {
                title: "Back-end",
            },
            frontend: {
                title: "Front-end",
            },
            devops: {
                title: "DevOps",
            },
            database: {
                title: "Database",
            },
            tools: {
                title: "Tools",
            },
            soft: {
                title: "Soft Skills",
            },
        },
    },
    fr: {
        summary: {
            about: {
                title: "Bienvenue",
                desc: "Ingénieur logiciel de **niveau intermédiaire** (+2 ans), spécialisé dans le **développement Web**. Basé à _Lyon_ & ouvert au **travail à distance**.",
                readMore: "Lire la suite",
            },
            project: {
                title: "Projet à la une",
                readMore: "Voir tous les projets",
            },
            experience: {
                title: "Expérience majeure",
                readMore: "Voir toutes les expériences",
            },
            skills: {
                title: "Compétences spécialisées",
                readMore: "Voir toutes les compétences",
            },
        },
        hero: {
            quote: "Je développe des choses sur le Web pour ce petit Monde",
            title: "Software Engineer",
            subtitle: "Développement Full-Stack",
        },
        footer: {
            github: { text: "", label: "Lien GitHub" },
            mail: { text: "", label: "Adresse mail" },
            linkedin: { text: "", label: "Lien Linkedin" },
            resume: { text: "CV", label: "Fichier CV", url: "/resume_fr.pdf" },
        },
        button: {
            readMore: "En savoir plus",
            viewOn: "Regarder sur",
            back: "Retour",
        },
        nav: {
            home: "accueil",
            about: "à propos",
            experience: "expérience",
            project: "projets",
            skills: "compétences",
        },
        project: {
            title: "Mes projets",
            type: { personal: "Personnel", academic: "Académique" },
            gritprint: {
                date: "2026",
                title: "GritPrint",
                desc: "Plateforme web e-commerce qui transforme des activités sportives (Strava) en posters d’art génératif personnalisés, mêlant data et graphisme.",
            },
            quiz_yt: {
                date: "2025",
                title: "Chaîne YouTube de Quiz pour Enfants",
                desc: "Production semi-automatisée de vidéos originales de quiz pour enfants sur YouTube",
                metrics: {
                    "subscribers/month": "abonnés/mois",
                    average_views_per_video: "vues moyennes/vidéo",
                },
            },
            social_network_account: {
                date: "2024",
                title: "Comptes de Réseaux Sociaux Autonomes",
                desc: "Production autonome de contenu pour multiples comptes Instagram",
            },
            portfolio: {
                date: "2023",
                title: "Portfolio Personnel",
                desc: "Création d'un portfolio personnel pour présenter mes projets et compétences.",
            },
            machine_learning_model: {
                date: "2022",
                title: "Modèle de Machine Learning",
                desc: "Création d'un modèle d'apprentissage machine en Python pour prédire les revenus de tous types de magasins de détail en Norvège",
                metrics: {
                    rank_reach: "rang atteint",
                },
            },
            auto_youtube_channel: {
                date: "2022",
                title: "Chaîne Youtube Autonome",
                desc: "Production de vidéos journalières des meilleurs clips de Twitch permettant d'obtenir une chaîne YouTube autonome",
                metrics: {
                    videos_produced: "vidéos produites",
                    subscribers: "abonnés atteints",
                    single_video_views: "vues sur une vidéo",
                },
            },
            dynamic_website: {
                date: "2021",
                title: "Site Web Dynamique",
                desc: "Site de vaccination en HTML, CSS, PHP, SQL en architecture MVC",
            },
        },
        about: {
            title: "Mon profil",
            sections: {
                personal_info: {
                    title: "Qui suis-je ?",
                    items: [
                        "<strong>Aurélien Dureux</strong>",
                        "24 ans",
                        "<strong>Software Engineer</strong> (Full-Stack Development)",
                        "Diplômé de l'Université de Technologie de Troyes",
                        "<strong>+2.5 ans d'expérience professionnelle</strong>",
                        "<strong>+4 ans d'expérience personnelle</strong> en side projects",
                        "Basé à <strong>Lyon</strong>",
                        "Ouvert au télétravail",
                    ],
                },
                skills: {
                    title: "Mes compétences",
                    items: [
                        "Développeur <strong>full-stack</strong>",
                        "Expérience en <strong>gestion de projets</strong>",
                        "Connaissances en <strong>DevOps</strong>",
                        "Compréhension des <strong>besoins client & utilisateurs</strong>",
                        "Notions en <strong>UX/UI</strong>",
                        "Travail en <strong>équipe agile</strong>",
                        "<strong>Français</strong> (natif) et <strong>Anglais</strong> (courant)",
                    ],
                },
                hobbies: {
                    title: "Mes passions",
                    items: [
                        "<strong>Conception</strong>: <em>Drone FPV, Impression 3D, Electronique</em>",
                        "<strong>Sports</strong>: <em>Triathlon, Escalade, Callisthénie, Randonnée</em>",
                        "<strong>Audiovisuel</strong>: <em>Graphisme, Montage vidéo</em>",
                    ],
                },
            },
        },
        experience: {
            title: "Mes expériences",
            namkin: {
                title: "Ingénieur Logiciel - Namkin",
                desc: "Livraison de solutions web B2B industrielles — de la reprise complète d'un projet e-commerce à une plateforme de visualisation d'usines en temps réel — en travaillant directement avec les clients sur les décisions techniques et fonctionnelles.",
                date: "OCT 2024 - MAR 2026",
                evolutions: {
                    ecommerce_project_recovery: {
                        title: "E-commerce — Reprise projet client pour SEDIS",
                        desc: "Prise en charge complète d'un projet e-commerce client interrompu : cadrage fonctionnel avec le client, migration de données depuis un ERP legacy (Python), développement intégral du backend (Medusa.js) et partiel du frontend (React) pour réduire la friction du passage de commandes des partenaires.",
                        result: "V1 livrée et validée par le client en 3 mois, incluant import produits, synchronisation des commandes, déploiement et onboarding réussi des premiers clients, réduisant de 50% le cycle de commande côté client.",
                    },
                    industrial_visualization_platform: {
                        title: "Visualisation de sites industriels en temps réel — Mecatherm",
                        desc: "Développement de fonctionnalités front-end (React, GraphQL) pour rendre intelligibles des données brutes aux opérateurs industriels. Développement de fonctionnalités d'administration (NestJS) simplifiant la coordination client/prestataire, et création de widgets de métriques adaptés au contexte métier des opérateurs.",
                        result: "Nouveaux vecteurs d'analyse livrés aux opérateurs industriels, améliorant la lisibilité des données et réduisant les frictions de coordination entre les équipes client et prestataire.",
                    },
                },
            },
            selectra: {
                title: "Ingénieur Web Full-stack - Selectra",
                desc: "Contribution aux applications web back-office internes, dont un outil visant à réduire les tâches chronophages du pôle qualité grâce à l'intégration d'IA, avec un gain de productivité de 100%.",
                date: "FÉV 2024 - JUIL 2024",
                evolutions: {
                    productivity_increase: {
                        title: "Outil back-office — Productivité pôle qualité",
                        desc: "Segmentation des utilisateurs par pays pour une gestion indépendante des équipes et des flux métiers (Vue.js, Laravel). Mécanismes de validation manuelle des résultats IA pour renforcer la confiance des collaborateurs dans les traitements automatisés. Identification et correction de bugs via monitoring (Datadog, Sentry) pour stabiliser l'expérience utilisateur.",
                        result: "Gain de productivité de 100% pour le pôle qualité, avec des workflows IA plus fiables et une réduction mesurable des incidents récurrents.",
                    },
                },
            },
            grytics: {
                title: "Ingénieur Développeur Assistant - Grytics",
                desc: "Contribution au développement d'une SaaS B2B d'analyse de données, en identifiant des cas d'usage IA à forte valeur et en sécurisant la fiabilité des mises en production par des tests end-to-end.",
                date: "FÉV 2023 - JUIL 2023",
                evolutions: {
                    ml_ai_pocs_developed: {
                        title: "POCs Machine Learning & IA générative",
                        desc: "Réalisation de plusieurs POCs (Python) à partir des données applicatives pour explorer des cas d'usage en ML et IA générative à fort potentiel business.",
                        result: "Plus de 10 POCs innovants livrés, dont 2 intégrés à la feuille de route du produit principal.",
                    },
                    test_implementation: {
                        title: "Couverture de tests fonctionnels end-to-end",
                        desc: "Conception et intégration de tests end-to-end (React, Cypress) sur les parcours utilisateurs critiques pour prévenir les régressions et sécuriser les mises en production.",
                        result: "100% de couverture sur les parcours critiques, réduisant significativement les bugs après déploiement.",
                    },
                },
            },
            type: { internship: "Stage", permanent: "CDI" },
        },
        skills: {
            title: "Mes compétences",
            backend: {
                title: "Back-end",
            },
            frontend: {
                title: "Front-end",
            },
            devops: {
                title: "DevOps",
            },
            database: {
                title: "Base de données",
            },
            tools: {
                title: "Outils",
            },
            soft: {
                title: "Soft Skills",
            },
        },
    },
};
