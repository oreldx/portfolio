<script>
    import { page } from "$app/state";
    import { useBodyScrollLock } from "$lib/utils";
    import { onMount } from "svelte";
    import { cubicInOut } from "svelte/easing";
    import { blur, fade } from "svelte/transition";
    import { t } from "../i18n";
    import { closeBurgerMenu, showBurgerMenu } from "../stores/menu.js";
    import LanguageSelector from "./LanguageSelector.svelte";
    import ThemeSelector from "./ThemeSelector.svelte";

    let mounted = $state(false);
    onMount(() => (mounted = true));

    const navOptions = ["about", "experience", "project", "skills"];

    let intSelected = $state(-1);
    $effect(() => {
        const currentPage = page.route.id ? page.route.id.split("/")[1] : null;
        intSelected = currentPage ? navOptions.indexOf(currentPage) : -1;
    });

    const switchSection = (event) => {
        intSelected = parseInt(event.srcElement.id);
        closeBurgerMenu();
    };

    $effect(() => {
        useBodyScrollLock(() => $showBurgerMenu);
    });
</script>

<nav class="hidden sm:block">
    <ul class="flex flex-col gap-6">
        {#each navOptions as option, i}
            {#if mounted}
                <li
                    class="w-fit"
                    transition:blur={{
                        delay: 230 + 100 * i,
                        duration: 300,
                        amount: 6,
                        easing: cubicInOut,
                    }}
                >
                    <a
                        class={`${intSelected == i ? "pl-4 font-bold tracking-[0.2rem] before:border-accent before:bg-accent drop-shadow-md before:drop-shadow-[0px_0px_8px_3px] before:drop-shadow-accent-light/30" : "before:border-primary hover:before:bg-primary"}
                         flex items-center transition-all before:transition-all before:w-4 before:h-4 before:mr-5 before:rounded-3xl before:border-solid   before:border-2 `}
                        id={i.toString()}
                        href={`/${option}`}
                        onclick={switchSection}
                    >
                        {$t("nav." + option)
                            .charAt(0)
                            .toUpperCase() + $t("nav." + option).slice(1)}
                    </a>
                </li>
            {/if}
        {/each}
    </ul>
</nav>

{#if $showBurgerMenu}
    <div
        class="fixed inset-0 z-40 bg-white dark:bg-black/85 backdrop-blur-md flex flex-col items-center justify-center sm:hidden"
        transition:fade={{ duration: 100, easing: cubicInOut }}
    >
        <nav
            transition:blur={{
                duration: 100,
                easing: cubicInOut,
            }}
        >
            <ul class="flex flex-col gap-8 text-center">
                {#each navOptions as option, i}
                    <li>
                        <a
                            class={`${intSelected == i ? "font-bold tracking-[0.2rem] text-accent drop-shadow-md" : "text-primary hover:text-accent"}
                             text-2xl transition-all`}
                            id={i.toString()}
                            href={`/${option}`}
                            onclick={switchSection}
                        >
                            {$t("nav." + option)
                                .charAt(0)
                                .toUpperCase() + $t("nav." + option).slice(1)}
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
