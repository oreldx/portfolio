<script>
    import { expoOut } from "svelte/easing";
    import { blur } from "svelte/transition";
    import CardTypes from "$lib/enums/cardType";
    import DetailedCard from "$lib/components/Card.svelte";

    const experienceItems = [
        {
            key: "experience.grytics",
            type: "internship",
            tags: [
                "Machine Learning",
                "React",
                "Javascript",
                "Python",
                "AWS",
                "Research & Development",
                "Functional Tests",
            ],
            url: "https://grytics.com/",
        },
        {
            key: "experience.selectra",
            type: "internship",
            tags: [
                "Laravel",
                "Vue.js",
                "Inertia.js",
                "Sentry",
                "Datadogs",
                "Semaphore",
                "Metabase",
            ],
            url: "https://careers.selectra.com/",
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
    {#each experienceItems as item}
        <DetailedCard data={item} cardType={CardTypes.EXPERIENCE} />
    {/each}
</div>
