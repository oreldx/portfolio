<script>
    import DetailedCard from "$lib/components/DetailedCard.svelte";
    import { expoOut } from "svelte/easing";
    import { blur } from "svelte/transition";

    const experienceItems = [
        {
            date: "FEB 2023 - JUL 2023",
            title: "Fullstack Engineer & ML Ops - Grytics",
            type: "Intern",
            desc: "At Grytics, I conducted functional testing and developed a machine learning and AI proof-of-concept for improving their web application. Working independently under the lead developer, I honed my skills in maintainable code and efficient problem-solving, contributing to the application's robustness and showcasing potential future enhancements.",
            tags: ["React", "Machine Learning", "Javascript", "Python", "AWS", "Research & Development", "Functional Tests"],
            url: "https://grytics.com/",
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