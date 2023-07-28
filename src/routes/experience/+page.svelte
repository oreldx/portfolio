<script>
    import Experience from "$lib/components/Experience.svelte";

    const experienceItems = [
        {
            date: "FEB 2023 - JUL 2023",
            title: "Fullstack Engienner & ML ops - Grytics",
            type: "Intern",
            desc: "At Grytics, I conducted functional testing and developed a machine learning and AI proof-of-concept for improving their web application. Working independently under the lead developer, I honed my skills in maintainable code and efficient problem-solving, contributing to the application's robustness and showcasing potential future enhancements.",
            tags: ["React", "Machine Learning", "Javascript", "Python", "AWS", "Functional Tests"],
        },
    ]
</script>

<div class="flex flex-col gap-12">
    {#each experienceItems as item}
        <Experience data={item}/>
    {/each}
</div>