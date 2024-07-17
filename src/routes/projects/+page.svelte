<script>
    import { expoOut } from "svelte/easing";
    import { blur } from "svelte/transition";
    import DetailedCard from "$lib/components/DetailedCard.svelte";

    const projectsItems = [
        {
            date: "2023",
            title: "Autonomous Social Network Accounts",
            type: "Personal",
            desc: "This project entailed developing a Python-based Social Networks automation solution. Key features include data extraction, AI-powered content generation, automated post uploads, and community engagement. A whole architecture was designed to manage multiple accounts and tasks.",
            tags: ["Python", "React", "Generative AIs", "ffmpeg", "APIs"],
            url: "",
        },
        {
            date: "2022",
            title: "Machine Learning Model",
            type: "Academic",
            desc: "Creation of a machine learning model in Python to predict revenue of all types of retail stores in Norway",
            tags: ["Python", "Machine Learning"],
            url: "https://github.com/oreldx/TDT4173_Project",
        },
        {
            date: "2021",
            title: "Autonomous Youtube Channel",
            type: "Personal",
            desc: 'This project involved crafting a YouTube channel dedicated to daily "best-of" compilations of top Twitch clips, enhanced with fancy overlays to enrich user experience. Utilizing Python for channel management, tasks encompassed data scrapping, resource acquisition, and content selection & creation.',
            tags: ["Python", "MySQL", "ffmpeg", "APIs"],
            url: "",
        },
        {
            date: "2021",
            title: "Dynamic Website",
            type: "Academic",
            desc: "Vaccination site in HTML, CSS, PHP, SQL with management of the various functionalities from a provider point of view",
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
