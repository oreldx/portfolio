<script>
    import { onMount } from "svelte";
    import { quartIn, quartOut } from "svelte/easing";
    import { blur, fly } from "svelte/transition";
    import LanguageSelector from "./LanguageSelector.svelte";
    import ThemeSelector from "./ThemeSelector.svelte";

    let mounted = $state(false);
    onMount(() => (mounted = true));
</script>

{#if mounted}
    <div
        in:fly={{
            duration: 800,
            y: 20,
            delay: 100,
            easing: quartOut,
        }}
        class="flex items-center gap-4 justify-around lg:justify-start"
    >
        <ThemeSelector />
        <LanguageSelector />
    </div>
{/if}
