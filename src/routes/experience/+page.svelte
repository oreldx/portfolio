<script>
    import DetailedCard from "$lib/components/DetailedCard.svelte";
    import { expoOut } from "svelte/easing";
    import { blur } from "svelte/transition";

    const experienceItems = [
        {
            date: "FEB 2023 - JUL 2023",
            title: "Assistant Development Engineer - Grytics",
            type: "Intern",
            desc: "At Grytics, I conducted functional testing and developed a machine learning/AI proof-of-concept (R&D) for improving their web application. Working independently under the lead developer, I honed my skills in maintainable code and efficient problem-solving, contributing to the application's robustness and showcasing potential future enhancements.",
            tags: ["Machine Learning", "React", "Javascript", "Python", "AWS", "Research & Development", "Functional Tests"],
            url: "https://grytics.com/",
        },
        {
            date: "FEB 2024 - JUL 2024",
            title: "Fullstack Web Engineer - Selectra",
            type: "Intern",
            desc: "At Selectra, I integrated new features, refactored databases and services, and fixed issues using Vue.js and Laravel, enhancing both the stability and performance of the platforms. I advanced user experience and project efficiency through process optimization and API integration between projects. I worked in a resilient, rigorous and  various monolithic environments, aiming to deliver high-tier quality software and AI-driven applications, such as audio transcription.",
            tags: ["Laravel", "Vue.js", "Inertia.js", "Sentry",  "Datadogs", "Semaphore","Metabase"],
            url: "https://careers.selectra.com/",
        },
    ]
</script>

<div 
    class="flex flex-col gap-12"
    in:blur={{
        amount: 5,
        duration: 800,
        easing: expoOut,
    }}
>
    {#each experienceItems as item}
        <DetailedCard data={item}/>
    {/each}
</div>