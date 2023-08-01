<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { quartOut } from 'svelte/easing';

    let mounted = false
    onMount(() => mounted = true)
</script>

{#if mounted}
    <div 
        class="flex flex-col gap-6"
        transition:fly={{
            duration: 1000,
            y: -20,
            delay: 100,
            easing: quartOut,
        }}
    >
        <h1 class="text-white">Aurélien Dureux</h1>
        <h2 class="text-white">IT Student Engineer at UTT</h2>
        <p class="italic">I dev stuff on the Web for the World</p>
    </div>
{/if}