<script>
    import { t } from "../i18n";
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";
    import { fly } from "svelte/transition";
    import { quartOut } from "svelte/easing";

    let mounted = false;
    onMount(() => (mounted = true));
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
        <a href="/">
            <h1 class="text-white">Aurélien Dureux</h1>
        </a>
        <div class="flex items-center">
            <Icon icon="game-icons:fleur-de-lys" class="w-5 h-5 mr-2 text-white" />
            <h2 class="text-white">{$t("hero.title")}</h2>
        </div>
        <p class="italic">{$t("hero.quote")}</p>
    </div>
{/if}
