<script>
    import AppPage from "$lib/components/AppPage.svelte";
    import Card from "$lib/components/Card.svelte";
    import { CardTypes } from "$lib/enums/CardType";
    import { experienceItems } from "data/experience";
</script>

<AppPage key="experience">
    {#each experienceItems as item}
        <Card type={CardTypes.EXPERIENCE} data={item} />
    {/each}
</AppPage>
