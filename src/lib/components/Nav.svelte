<script>
    import { page } from "$app/state";
    import { useBodyScrollLock } from "$lib/utils";
    import { t } from "../i18n";
    import { closeBurgerMenu, showBurgerMenu } from "../stores/menu.js";
    import LanguageSelector from "./LanguageSelector.svelte";
    import ThemeSelector from "./ThemeSelector.svelte";

    let { compact = false } = $props();

    const navOptions = [
        { key: "home", isMobileOnly: false, path: "/" },
        { key: "about", isMobileOnly: false, path: "/about" },
        { key: "experience", isMobileOnly: false, path: "/experience" },
        { key: "project", isMobileOnly: false, path: "/project" },
        { key: "skills", isMobileOnly: false, path: "/skills" },
    ];

    const intSelected = $derived(
        navOptions.findIndex(
            (option) =>
                option.path ===
                (page.url.pathname.split("/")[1] ? `/${page.url.pathname.split("/")[1]}` : "/"),
        ),
    );

    const switchSection = () => closeBurgerMenu();

    $effect(() => {
        useBodyScrollLock(() => $showBurgerMenu);
    });
</script>

{#if compact}
    <nav class="hidden sm:block" aria-label={$t("controls.navigation")}>
        <ul class="flex flex-wrap gap-x-5 gap-y-3">
            {#each navOptions as option, i}
                <li>
                    <a
                        href={option.path}
                        onclick={switchSection}
                        aria-current={intSelected === i ? "page" : undefined}
                        class={`text-sm rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${intSelected === i ? "font-bold text-accent dark:text-accent-light" : "text-zinc-600 dark:text-zinc-400 hover:text-accent"}`}
                        >{$t("nav." + option.key)}</a
                    >
                </li>
            {/each}
        </ul>
    </nav>
{:else}
    <nav class="hidden sm:block">
        <ul class="flex flex-col gap-6">
            {#each navOptions as option, i}
                {#if !option.isMobileOnly}
                    <li class="w-fit">
                        <a
                            class={`${intSelected == i ? "pl-4 font-bold tracking-[0.2rem] before:border-accent before:bg-accent" : "before:border-primary hover:before:bg-primary"}
                         flex items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent before:w-4 before:h-4 before:mr-5 before:rounded-3xl before:border-solid   before:border-2 `}
                            id={i.toString()}
                            href={option.path}
                            onclick={switchSection}
                        >
                            {$t("nav." + option.key)
                                .charAt(0)
                                .toUpperCase() + $t("nav." + option.key).slice(1)}
                        </a>
                    </li>
                {/if}
            {/each}
        </ul>
    </nav>
{/if}

{#if $showBurgerMenu}
    <div class="fixed inset-0 z-40 bg-surface flex flex-col items-center justify-center sm:hidden">
        <nav>
            <ul class="flex flex-col gap-8 text-center">
                {#each navOptions as option, i}
                    <li>
                        <a
                            class={`${intSelected == i ? "font-bold tracking-[0.2rem] text-accent" : "text-primary hover:text-accent"}
                             text-2xl rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent `}
                            id={i.toString()}
                            href={option.path}
                            onclick={switchSection}
                        >
                            {$t("nav." + option.key)
                                .charAt(0)
                                .toUpperCase() + $t("nav." + option.key).slice(1)}
                        </a>
                    </li>
                {/each}
            </ul>

            <div class="flex gap-4 mt-10 justify-center">
                <ThemeSelector />
                <LanguageSelector />
            </div>
        </nav>
    </div>
{/if}
