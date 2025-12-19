<script>
    import { expoOut } from "svelte/easing";
    import { blur } from "svelte/transition";
    import { CardTypes } from "$lib/enums/CardType";
    import Card from "$lib/components/Card.svelte";
    import { projectsItems } from "data/projects";
    import AppPage from "$lib/components/AppPage.svelte";
</script>

<AppPage key="project">
    {#each projectsItems as item}
        <Card type={CardTypes.PROJECT} data={item} />
    {/each}
</AppPage>
