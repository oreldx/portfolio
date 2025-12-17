<script>
    import { onMount } from "svelte";
    import { quartOut } from "svelte/easing";
    import { fly, scale } from "svelte/transition";
    import { t } from "../i18n";
    import Icon from "@iconify/svelte";
    import ThemeSelector from "./ThemeSelector.svelte";
    import LanguageSelector from "./LanguageSelector.svelte";

    const dockItems = [
        {
            key: "github",
            icon: "mdi:github",
            url: "https://github.com/oreldx",
        },
        {
            key: "mail",
            icon: "tabler:mail-filled",
            url: "mailto:aurelien.dureux+pf@proton.me",
        },
        {
            key: "linkedin",
            icon: "mdi:linkedin",
            url: "https://www.linkedin.com/in/dureuxaur%C3%A9lien/",
        },
        {
            key: "resume",
            icon: "ph:download-fill",
        },
    ];

    let mounted = $state(false);
    onMount(() => (mounted = true));
</script>

{#if mounted}
    <div
        class="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
        in:fly={{
            duration: 600,
            y: 50,
            delay: 200,
            easing: quartOut,
        }}
    >
        <ul
            class="flex items-center gap-2 px-2 py-2 rounded-2xl bg-base-100/80 backdrop-blur-md border border-primary/20 shadow-lg"
        >
            {#each dockItems as item, i}
                <li
                    in:scale={{
                        delay: 400 + i * 80,
                        duration: 300,
                        start: 0.5,
                        easing: quartOut,
                    }}
                >
                    <a
                        target="_blank"
                        href={item.url ? item.url : $t("footer." + item.key + ".url")}
                        aria-label={$t("footer." + item.key + ".label")}
                        class={{
                            "flex items-center justify-center min-w-12 h-12 rounded-xl text-primary/70 hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-110 gap-2": true,
                            "sm:p-2": $t("footer." + item.key + ".text"),
                        }}
                    >
                        <Icon icon={item.icon} class="text-2xl" />
                        {#if $t("footer." + item.key + ".text")}
                            <p class="hidden sm:block">
                                {$t("footer." + item.key + ".text")}
                            </p>
                        {/if}
                    </a>
                </li>
            {/each}
            <li>
                <span class="h-6 border-l border-primary/30"></span>
            </li>
            <!-- TODO: replace both selector with burger menu -->
            <li>
                <ThemeSelector />
            </li>
            <li>
                <LanguageSelector />
            </li>
        </ul>
    </div>
{/if}
