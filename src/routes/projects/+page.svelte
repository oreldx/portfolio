<script>
    import { expoOut } from "svelte/easing";
    import { blur } from "svelte/transition";
    import CardTypes from "$lib/enums/cardType";
    import Card from "$lib/components/Card.svelte";

    const projectsItems = [
        {
            key: "sna",
            type: "personal",
            tags: {
                techs: [
                    "Flask",
                    "Vue.js",
                    "Node.js",
                    "Remotion",
                    "Redis",
                    "Celery",
                    "MySQL",
                    "Docker",
                ],
                subjects: ["Generative AIs"],
            },
        },
        {
            key: "ml",
            type: "academic",
            tags: {
                techs: ["Python"],
                subjects: ["Machine Learning"],
            },
            externalLink: "https://github.com/oreldx/TDT4173_Project",
        },
        {
            key: "ayc",
            type: "personal",
            tags: {
                techs: ["Python", "SQLite", "Docker", "CRON", "APIs", "FFmpeg"],
                subjects: [],
            },
        },
        {
            key: "dw",
            type: "academic",
            tags: {
                techs: ["HTML", "CSS", "PHP", "SQL"],
                subjects: [],
            },
            externalLink: "https://github.com/oreldx/LO07_Project",
        },
    ];
</script>

<div
    class="flex flex-col gap-4"
    in:blur={{
        amount: 5,
        duration: 800,
        easing: expoOut,
    }}
>
    {#each projectsItems as item}
        <Card type={CardTypes.PROJECT} data={item} />
    {/each}
</div>
