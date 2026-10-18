export default {
    en: {
        controls: {
            reading: "Reading",
            theme: "Change theme",
            language: "Change language",
            menu: "Menu",
            navigation: "Main navigation",
            tools: "Portfolio tools",
        },
        summary: {
            about: {
                title: "What I like to build",
                desc: "I explore the web, data and visual creation through personal projects, from automation to generative art.\n\nBuilding at Indy with a team that ships 🚀",

                readMore: "More about me",
            },
            project: {
                title: "Featured projects",
                readMore: "View all projects",
            },
            experience: {
                title: "Featured experience",
                readMore: "View all experience",
            },
            skills: {
                title: "Skills I use",
                readMore: "View all skills",
            },
        },
        hero: {
            quote: "I dev stuff on the Web for the World",
            title: "Software Engineer @ Indy",
        },
        footer: {
            github: { text: "", label: "My GitHub profile" },
            mail: { text: "", label: "Email me" },
            linkedin: { text: "", label: "My LinkedIn profile" },
            resume: { text: "Resume", label: "Open my resume", url: "/resume_en.pdf" },
        },
        button: {
            details: "Details",
            result: "Result:",
            viewWebsite: "View website",
            readMore: "Read more",
            viewOnGitHub: "View on GitHub",
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
                        "Aurélien Dureux",
                        "25 years old",
                        "Software engineer at Indy, working in full-stack development",
                        "Graduate of the University of Technology of Troyes",
                        "Over 3 years of professional experience",
                        "Over 4 years of experience building side projects",
                        "Based in Lyon, France",
                    ],
                },
                skills: {
                    title: "My skills",
                    items: [
                        "Full-stack development",
                        "Project management experience",
                        "DevOps knowledge",
                        "Understanding client and user needs",
                        "UX/UI fundamentals",
                        "Working in agile teams",
                        "Native French speaker, fluent in English",
                    ],
                },
                hobbies: {
                    title: "My hobbies",
                    items: [
                        "Building FPV drones, 3D printing and electronics",
                        "Triathlon, climbing, calisthenics and hiking",
                        "Graphic design and video editing",
                    ],
                },
            },
        },
        project: {
            title: "My projects",
            type: { personal: "Personal", academic: "Academic" },
            lofibirds: {
                date: "2026",
                title: "Lofibirds",
                desc: "A pixel art sound garden for creating a personal soundscape with five bird species and five ambient sounds, each with independent volume controls.",
            },
            gritprint: {
                date: "2026",
                title: "GritPrint",
                desc: "An online store where people turn their Strava activities into personalized generative art posters.",
            },
            quiz_yt: {
                date: "2025",
                title: "YouTube quiz videos for children",
                desc: "A tool for creating original quiz videos for children, with semi-automated production for YouTube.",
                metrics: {
                    "subscribers/month": "subscribers/month",
                    average_views_per_video: "average views/video",
                },
            },
            social_network_account: {
                date: "2024",
                title: "Automated Instagram accounts",
                desc: "A system that creates and publishes content for multiple Instagram accounts automatically.",
            },
            portfolio: {
                date: "2023",
                title: "Personal portfolio",
                desc: "The site I built to share my projects, skills and experience.",
            },
            machine_learning_model: {
                date: "2022",
                title: "Retail revenue prediction",
                desc: "A Python machine learning model that predicts revenue for all types of retail stores in Norway.",
                metrics: {
                    rank_reach: "ranking",
                },
            },
            auto_youtube_channel: {
                date: "2022",
                title: "Automated YouTube channel",
                desc: "A YouTube channel that automatically selects, edits and publishes a daily compilation of popular Twitch clips.",
                metrics: {
                    videos_produced: "videos produced",
                    subscribers: "subscribers",
                    single_video_views: "views on one video",
                },
            },
            dynamic_website: {
                date: "2021",
                title: "Vaccination website",
                desc: "A vaccination website built with HTML, CSS, PHP and SQL using an MVC architecture.",
            },
        },
        experience: {
            title: "My experience",
            indy: {
                title: "Software engineer at Indy",
                desc: "At Indy, I handle VAT features and the in-app premium subscription flow. I build new features to help self-employed people with their accounting, and maintain and support existing functionality.",
                date: "MAY 2026 - Present",
            },
            namkin: {
                title: "Software engineer at Namkin",
                desc: "I took over a stalled B2B e-commerce project and worked on a real-time factory visualization platform, making technical and functional decisions directly with clients.",
                date: "OCT 2024 - MAR 2026",
                evolutions: {
                    ecommerce_project_recovery: {
                        title: "Taking over SEDIS's e-commerce project",
                        desc: "I took over the project from scoping to delivery. With the client, I defined the requirements, migrated data from a legacy ERP using Python, built the full backend in Medusa.js and part of the React frontend to make ordering easier for partners.",
                        result: "The client validated V1 within 3 months. It included product imports, order synchronization, deployment and onboarding of the first customers. Order cycle time fell by 50%.",
                    },
                    industrial_visualization_platform: {
                        title: "Real-time factory visualization for Mecatherm",
                        desc: "I built React and GraphQL dashboards to help operators read raw industrial data, with metric widgets suited to their work. I also developed NestJS admin features to simplify coordination between client and provider teams.",
                        result: "Operators gained new ways to analyze their data, with clearer dashboards and less coordination work between client and provider teams.",
                    },
                },
            },
            selectra: {
                title: "Software engineering intern at Selectra",
                desc: "I worked on internal web applications, including an AI-assisted tool that reduced time-consuming tasks for the quality team and increased its productivity by 100%.",
                date: "FEB 2024 - JUL 2024",
                evolutions: {
                    productivity_increase: {
                        title: "Internal tools for the quality team",
                        desc: "Using Vue.js and Laravel, I separated users by country so each team could manage its own workflows. I added manual review of AI results to help colleagues trust the automated processing, and used Datadog and Sentry to find and fix bugs that affected their work.",
                        result: "The quality team's productivity increased by 100%, with more reliable AI-assisted workflows and a measurable drop in recurring incidents.",
                    },
                },
            },
            grytics: {
                title: "Junior software engineering intern at Grytics",
                desc: "I worked on a B2B SaaS analytics platform, testing AI use cases with business potential and adding end-to-end tests to make deployments more reliable.",
                date: "FEB 2023 - JUL 2023",
                evolutions: {
                    ml_ai_pocs_developed: {
                        title: "Machine learning and generative AI prototypes",
                        desc: "I built Python proofs of concept using application data to test how machine learning and generative AI could be useful to the business.",
                        result: "I delivered over 10 proofs of concept, 2 of which were added to the main product roadmap.",
                    },
                    test_implementation: {
                        title: "End-to-end functional test coverage",
                        desc: "I designed and added end-to-end tests with React and Cypress for critical user flows to catch regressions before production deployments.",
                        result: "Tests covered 100% of critical user flows, with far fewer bugs after deployment.",
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
                title: "Databases",
            },
            tools: {
                title: "Tools",
            },
            soft: {
                title: "Other skills",
            },
        },
    },
    fr: {
        controls: {
            reading: "Lecture",
            theme: "Changer de thème",
            language: "Changer de langue",
            menu: "Menu",
            navigation: "Navigation principale",
            tools: "Outils du portfolio",
        },
        summary: {
            about: {
                title: "Ce que j'aime créer",
                desc: "J'explore le web, la donnée et la création visuelle à travers des projets personnels, de l'automatisation à l'art génératif.\n\nSinon je prod' chez Indy, avec une équipe qui envoie 🚀",
                readMore: "Lire la suite",
            },
            project: {
                title: "Projets à la une",
                readMore: "Voir tous les projets",
            },
            experience: {
                title: "Une expérience de mon parcours",
                readMore: "Voir toutes les expériences",
            },
            skills: {
                title: "Mes compétences",
                readMore: "Voir toutes les compétences",
            },
        },
        hero: {
            quote: "Je développe des choses pour le web",
            title: "Ingénieur logiciel chez Indy",
        },
        footer: {
            github: { text: "", label: "Mon profil GitHub" },
            mail: { text: "", label: "M'écrire par mail" },
            linkedin: { text: "", label: "Mon profil LinkedIn" },
            resume: { text: "CV", label: "Ouvrir mon CV", url: "/resume_fr.pdf" },
        },
        button: {
            details: "Détails",
            result: "Résultat :",
            viewWebsite: "Voir le site",
            readMore: "En savoir plus",
            viewOnGitHub: "Voir sur GitHub",
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
            lofibirds: {
                date: "2026",
                title: "Lofibirds",
                desc: "Un jardin sonore en pixel art pour composer une ambiance avec cinq espèces d'oiseaux et cinq ambiances sonores, aux volumes indépendants.",
            },
            gritprint: {
                date: "2026",
                title: "GritPrint",
                desc: "Une app/boutique en ligne pour transformer ses activités Strava en posters d'art génératif personnalisés.",
            },
            quiz_yt: {
                date: "2025",
                title: "Quiz YouTube pour enfants",
                desc: "Un outil pour créer des vidéos originales de quiz pour enfants, avec une production semi-automatisée pour YouTube.",
                metrics: {
                    "subscribers/month": "abonnés/mois",
                    average_views_per_video: "vues moyennes/vidéo",
                },
            },
            social_network_account: {
                date: "2024",
                title: "Comptes Instagram automatisés",
                desc: "Un système qui crée et publie automatiquement du contenu pour plusieurs comptes Instagram.",
            },
            portfolio: {
                date: "2023",
                title: "Portfolio personnel",
                desc: "Le site que j'ai créé pour partager mes projets, mes compétences et mon parcours.",
            },
            machine_learning_model: {
                date: "2022",
                title: "Prédiction du chiffre d'affaires de commerces",
                desc: "Un modèle de machine learning en Python pour prédire le chiffre d'affaires de tous types de commerces en Norvège.",
                metrics: {
                    rank_reach: "au classement",
                },
            },
            auto_youtube_channel: {
                date: "2022",
                title: "Chaîne YouTube automatisée",
                desc: "Une chaîne YouTube qui sélectionne, monte et publie chaque jour une compilation de clips Twitch populaires.",
                metrics: {
                    videos_produced: "vidéos produites",
                    subscribers: "abonnés",
                    single_video_views: "vues sur une vidéo",
                },
            },
            dynamic_website: {
                date: "2021",
                title: "Site de vaccination",
                desc: "Un site de vaccination développé en HTML, CSS, PHP et SQL, avec une architecture MVC.",
            },
        },
        about: {
            title: "Mon profil",
            sections: {
                personal_info: {
                    title: "Qui suis-je ?",
                    items: [
                        "Aurélien Dureux",
                        "25 ans",
                        "Ingénieur logiciel chez Indy, en développement full-stack",
                        "Diplômé de l'Université de Technologie de Troyes",
                        "Plus de 3 ans d'expérience professionnelle",
                        "Plus de 4 ans à développer des projets personnels",
                        "Basé à Lyon",
                    ],
                },
                skills: {
                    title: "Mes compétences",
                    items: [
                        "Développement full-stack",
                        "Expérience en gestion de projets",
                        "Connaissances en DevOps",
                        "Compréhension des besoins des clients et des utilisateurs",
                        "Notions en UX/UI",
                        "Travail en équipe agile",
                        "Français natif et anglais courant",
                    ],
                },
                hobbies: {
                    title: "Mes passions",
                    items: [
                        "Conception de drones FPV, impression 3D et électronique",
                        "Triathlon, escalade, callisthénie et randonnée",
                        "Graphisme et montage vidéo",
                    ],
                },
            },
        },
        experience: {
            title: "Mes expériences",
            indy: {
                title: "Ingénieur logiciel chez Indy",
                desc: "Chez Indy, je m'occupe de la TVA et du parcours de souscription à l'offre premium dans l'application. Je développe de nouvelles fonctionnalités pour aider les indépendants dans leur comptabilité et j'assure le support et la maintenance de l'existant.",
                date: "MAI 2026 - Présent",
            },
            namkin: {
                title: "Ingénieur logiciel chez Namkin",
                desc: "J'ai repris un projet e-commerce B2B à l'arrêt et travaillé sur une plateforme de visualisation d'usines en temps réel, en échangeant directement avec les clients sur les choix techniques et fonctionnels.",
                date: "OCT 2024 - MAR 2026",
                evolutions: {
                    ecommerce_project_recovery: {
                        title: "Reprise du projet e-commerce de SEDIS",
                        desc: "J'ai repris le projet du cadrage à la livraison : définition des besoins avec le client, migration des données d'un ancien ERP en Python, développement de tout le backend en Medusa.js et d'une partie du frontend en React pour simplifier les commandes des partenaires.",
                        result: "V1 livrée et validée par le client en 3 mois, avec l'import des produits, la synchronisation des commandes, le déploiement et l'accompagnement des premiers clients. Le cycle de commande a été réduit de 50 %.",
                    },
                    industrial_visualization_platform: {
                        title: "Visualisation d'usines en temps réel pour Mecatherm",
                        desc: "J'ai développé des tableaux de bord en React et GraphQL pour aider les opérateurs à lire les données industrielles, avec des widgets de métriques adaptés à leur métier. J'ai aussi créé des fonctions d'administration en NestJS pour simplifier la coordination entre client et prestataire.",
                        result: "Les opérateurs disposent de nouvelles façons d'analyser leurs données, avec des tableaux de bord plus lisibles et moins de travail de coordination entre les équipes client et prestataire.",
                    },
                },
            },
            selectra: {
                title: "Ingénieur web full-stack chez Selectra",
                desc: "J'ai travaillé sur les applications web internes, dont un outil assisté par IA qui a réduit les tâches chronophages du pôle qualité et augmenté sa productivité de 100 %.",
                date: "FÉV 2024 - JUIL 2024",
                evolutions: {
                    productivity_increase: {
                        title: "Outils internes pour le pôle qualité",
                        desc: "Avec Vue.js et Laravel, j'ai séparé les utilisateurs par pays pour que chaque équipe puisse gérer ses propres processus métier. J'ai ajouté une validation manuelle des résultats de l'IA pour aider les collaborateurs à faire confiance aux traitements automatisés, puis utilisé Datadog et Sentry pour repérer et corriger les bugs qui gênaient leur travail.",
                        result: "La productivité du pôle qualité a augmenté de 100 %, avec des traitements assistés par IA plus fiables et une baisse mesurable des incidents récurrents.",
                    },
                },
            },
            grytics: {
                title: "Ingénieur développeur assistant chez Grytics",
                desc: "J'ai travaillé sur un SaaS B2B d'analyse de données, en testant des usages de l'IA utiles au produit et en ajoutant des tests de bout en bout pour fiabiliser les mises en production.",
                date: "FÉV 2023 - JUIL 2023",
                evolutions: {
                    ml_ai_pocs_developed: {
                        title: "Prototypes de machine learning et d'IA générative",
                        desc: "J'ai réalisé plusieurs preuves de concept en Python à partir des données de l'application pour tester des usages du machine learning et de l'IA générative qui pourraient être utiles au produit.",
                        result: "Plus de 10 preuves de concept livrées, dont 2 intégrées à la feuille de route du produit principal.",
                    },
                    test_implementation: {
                        title: "Tests fonctionnels de bout en bout",
                        desc: "J'ai conçu et intégré des tests de bout en bout avec React et Cypress sur les parcours utilisateurs critiques pour détecter les régressions avant la mise en production.",
                        result: "Les tests couvrent 100 % des parcours critiques, avec une forte baisse des bugs après déploiement.",
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
                title: "Bases de données",
            },
            tools: {
                title: "Outils",
            },
            soft: {
                title: "Autres compétences",
            },
        },
    },
};
