<script>
    import { onMount } from "svelte";
    import { quartIn } from "svelte/easing";
    import { blur } from "svelte/transition";
    import LanguageSelector from "./LanguageSelector.svelte";
    import ThemeSelector from "./ThemeSelector.svelte";

    let mounted = $state(false);
    onMount(() => (mounted = true));
</script>

{#if mounted}
    <div
        transition:blur={{
            delay: 100,
            duration: 300,
            amount: 6,
            easing: quartIn,
        }}
        class="flex items-center gap-4 justify-around lg:justify-start"
    >
        <ThemeSelector />
        <LanguageSelector />
    </div>
{/if}
