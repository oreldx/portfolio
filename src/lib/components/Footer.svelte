<script>
    import Icon from "@iconify/svelte";
    import { onMount } from "svelte";
    import { quartIn, quartOut } from "svelte/easing";
    import { blur, fly } from "svelte/transition";
    import { t } from "../i18n";
    import LanguageSelector from "./LanguageSelector.svelte";
    import ThemeSelector from "./ThemeSelector.svelte";

    let mounted = $state(false);
    onMount(() => (mounted = true));

    const footerItems = [
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
</script>

{#if mounted}
    <div
        class="flex flex-col gap-4"
        transition:fly={{
            duration: 600,
            y: 20,
            delay: 300,
            easing: quartOut,
        }}
    >
        <ul
            class="flex justify-between items-center md:justify-evenly lg:justify-start lg:gap-6 mt-auto"
            transition:blur={{
                delay: 100,
                duration: 300,
                amount: 6,
                easing: quartIn,
            }}
        >
            {#each footerItems as item}
                <li class="text-primary/70 hover:text-primary transition-all">
                    <a
                        target="_blank"
                        href={item.url ? item.url : $t("footer." + item.key + ".url")}
                        aria-label={item.label}
                        class="flex items-center gap-3"
                    >
                        <Icon icon={item.icon} class="text-3xl" />
                        <p class="hidden sm:block">
                            {$t("footer." + item.key + ".text")}
                        </p>
                    </a>
                </li>
            {/each}
        </ul>
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
    </div>
{/if}
