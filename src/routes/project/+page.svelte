<script>
    import { expoOut } from "svelte/easing";
    import { blur } from "svelte/transition";
    import { CardTypes } from "$lib/enums/CardType";
    import Card from "$lib/components/Card.svelte";
    import { projectsItems } from "data/projects";
</script>

<div
    class="flex flex-col gap-4"
    in:blur={{
        amount: 5,
        duration: 800,
        easing: expoOut,
    }}
>
    {#each projectsItems as item}
        <Card type={CardTypes.PROJECT} data={item} />
    {/each}
</div>
