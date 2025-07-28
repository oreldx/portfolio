<script>
    import { expoOut } from "svelte/easing";
    import { blur } from "svelte/transition";
    import { CardTypes } from "$lib/enums/CardType";
    import Card from "$lib/components/Card.svelte";
    import { experienceItems } from "data/experience";
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
