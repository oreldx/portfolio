<script>
    import { page } from "$app/state";
    import { onMount } from "svelte";
    import { quartIn } from "svelte/easing";
    import { blur, slide } from "svelte/transition";
    import { t } from "../i18n";
    import { showBurgerMenu, closeBurgerMenu } from "../stores/menu.js";
    import ThemeSelector from "./ThemeSelector.svelte";
    import LanguageSelector from "./LanguageSelector.svelte";

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
</script>

<nav class={"hidden sm:block"}>
    <ul class="flex flex-col gap-6">
        {#each navOptions as option, i}
            {#if mounted}
                <li
                    class="w-fit"
                    transition:blur={{
                        delay: 230 + 100 * i,
                        duration: 300,
                        amount: 6,
                        easing: quartIn,
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

    <!-- Selectors shown only on small screens when burger menu is open -->
    {#if $showBurgerMenu}
        <div
            class="flex gap-4 mt-6 sm:hidden"
            transition:slide={{ duration: 200, easing: quartIn }}
        >
            <ThemeSelector />
            <LanguageSelector />
        </div>
    {/if}
</nav>
