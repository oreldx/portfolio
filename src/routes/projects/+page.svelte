<script>
    import { expoOut } from "svelte/easing";
    import { blur } from "svelte/transition";
    import DetailedCard from "$lib/components/DetailedCard.svelte";

    const projectsItems = [
        {
            key: "projects.sna",
            date: "2023",
            type: "personal",
            tags: ["Python", "React", "Generative AIs", "ffmpeg", "APIs"],
            url: "",
        },
        {
            key: "projects.ml",
            date: "2022",
            type: "academic",
            tags: ["Python", "Machine Learning"],
            url: "https://github.com/oreldx/TDT4173_Project",
        },
        {
            key: "projects.ayc",
            date: "2021",
            type: "personal",
            tags: ["Python", "MySQL", "ffmpeg", "APIs"],
            url: "",
        },
        {
            key: "projects.dw",
            date: "2021",
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
        <DetailedCard data={item} />
    {/each}
</div>
