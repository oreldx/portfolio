<script>
    import { expoOut } from "svelte/easing";
    import { blur } from "svelte/transition";
    import CardTypes from "$lib/enums/cardType";
    import Card from "$lib/components/Card.svelte";

    const projectsItems = [
        {
            key: "projects.sna",
            type: "personal",
            tags: [
                "Flask",
                "Vue.js",
                "Node.js",
                "Remotion",
                "Redis",
                "Celery",
                "MySQL",
                "Docker",
                "Generative AIs",
            ],
            url: "/projects/sna",
        },
        {
            key: "projects.ml",
            type: "academic",
            tags: ["Python", "Machine Learning"],
            url: "https://github.com/oreldx/TDT4173_Project",
        },
        {
            key: "projects.ayc",
            type: "personal",
            tags: ["Python", "SQLite", "Docker", "CRON", "APIs", "FFmpeg"],
            url: "/projects/ayc",
        },
        {
            key: "projects.dw",
            type: "academic",
            tags: ["HTML", "CSS", "PHP", "SQL"],
            url: "https://github.com/oreldx/LO07_Project",
        },
    ];
</script>

<div
    class="flex flex-col gap-12"
    in:blur={{
        amount: 5,
        duration: 800,
        easing: expoOut,
    }}
>
    {#each projectsItems as item}
        <Card data={item} cardType={CardTypes.PROJECT} />
    {/each}
</div>
