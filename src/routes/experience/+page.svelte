<script>
    import { expoOut } from "svelte/easing";
    import { blur } from "svelte/transition";
    import CardTypes from "$lib/enums/cardType";
    import Card from "$lib/components/Card.svelte";

    const experienceItems = [
        {
            key: "namkin",
            type: "permanent",
            tags: {
                techs: ["React", "Typescript", "Medusa.js", "Python", "Docker", "PostgreSQL"],
                subjects: ["Web Development", "Agile Methodologies"],
            },
            externalLink: "https://namkin.fr/",
        },
        {
            key: "selectra",
            type: "internship",
            tags: {
                techs: [
                    "Laravel",
                    "Vue.js",
                    "Inertia.js",
                    "Sentry",
                    "Datadogs",
                    "Semaphore",
                    "Metabase",
                ],
                subjects: ["Web Development"],
            },
            externalLink: "https://careers.selectra.com/",
        },
        {
            key: "grytics",
            type: "internship",
            tags: {
                techs: [
                    "Machine Learning",
                    "React",
                    "Javascript",
                    "Python",
                    "AWS",
                    "Research & Development",
                ],
                subjects: ["Web Development", "Functional Tests"],
            },
            externalLink: "https://grytics.com/",
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
    {#each experienceItems as item}
        <Card type={CardTypes.EXPERIENCE} data={item} />
    {/each}
</div>
