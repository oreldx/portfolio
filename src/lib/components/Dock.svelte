<script>
    import { onMount } from "svelte";
    import { t } from "../i18n";
    import Icon from "@iconify/svelte";
    import ThemeSelector from "./ThemeSelector.svelte";
    import LanguageSelector from "./LanguageSelector.svelte";
    import { showBurgerMenu, toggleBurgerMenu } from "../stores/menu.js";
    import { readingMode, toggleReadingMode } from "../stores/reading.js";

    let { showReadingMode = true } = $props();

    const dockItems = [
        { key: "github", icon: "mdi:github", url: "https://github.com/oreldx" },
        { key: "mail", icon: "tabler:mail-filled", url: "mailto:aurelien.dureux+pf@proton.me" },
        {
            key: "linkedin",
            icon: "mdi:linkedin",
            url: "https://www.linkedin.com/in/dureuxaur%C3%A9lien/",
        },
        { key: "resume", icon: "ph:download-fill" },
    ];
    let mounted = $state(false);
    onMount(() => (mounted = true));
</script>

{#if mounted}
    <nav
        aria-label={$t("controls.tools")}
        class="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100%-16px)] bg-surface border border-divider rounded-xl"
    >
        <ul class="flex items-center gap-1 sm:gap-2 p-2">
            {#each dockItems as item}
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.url ?? $t("footer." + item.key + ".url")}
                        aria-label={$t("footer." + item.key + ".label")}
                        title={$t("footer." + item.key + ".label")}
                        class="dock-control sm:w-auto sm:min-w-12 sm:px-2 sm:gap-2"
                    >
                        <Icon icon={item.icon} class="text-2xl" />
                        {#if $t("footer." + item.key + ".text")}
                            <span class="hidden sm:block">{$t("footer." + item.key + ".text")}</span
                            >
                        {/if}
                    </a>
                </li>
            {/each}
            <li aria-hidden="true" class="h-6 w-px shrink-0 bg-divider"></li>
            {#if showReadingMode}
                <li class="hidden sm:block">
                    <button
                        onclick={toggleReadingMode}
                        aria-pressed={$readingMode}
                        aria-label={$t("controls.reading")}
                        title={$t("controls.reading")}
                        class="dock-control sm:w-auto sm:px-3 sm:gap-2"
                        class:reading-active={$readingMode}
                    >
                        <Icon icon="mdi:book-open-page-variant-outline" class="text-2xl" />
                        <span class="hidden sm:block text-sm">{$t("controls.reading")}</span>
                    </button>
                </li>
            {/if}
            <li class="sm:hidden">
                <button
                    onclick={toggleBurgerMenu}
                    aria-label={$t("controls.menu")}
                    aria-expanded={$showBurgerMenu}
                    class="dock-control"
                >
                    <Icon icon={$showBurgerMenu ? "mdi:close" : "mdi:menu"} class="text-2xl" />
                </button>
            </li>
            <li class="hidden sm:block"><ThemeSelector /></li>
            <li class="hidden sm:block"><LanguageSelector /></li>
        </ul>
    </nav>
{/if}

<style>
    .reading-active {
        color: var(--color-accent);
        background: var(--color-surface-muted);
    }
    :global(.dark) .reading-active {
        color: var(--color-accent-light);
    }
</style>
