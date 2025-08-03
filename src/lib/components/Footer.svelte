<script>
    import { t } from "../i18n";
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";
    import { fly } from "svelte/transition";
    import { quartOut } from "svelte/easing";
    import LanguageSelector from "./LanguageSelector.svelte";

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
    <ul
        class="flex justify-between
        items-center md:justify-evenly lg:justify-start lg:gap-6 mt-auto"
        transition:fly={{
            duration: 1000,
            y: 20,
            delay: 100,
            easing: quartOut,
        }}
    >
        <li>
            <LanguageSelector />
        </li>
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
{/if}
