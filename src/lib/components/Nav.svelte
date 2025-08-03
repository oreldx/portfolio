<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { quartIn } from "svelte/easing";
    import { blur } from "svelte/transition";
    import { t } from "../i18n";

    let mounted = false;
    onMount(() => (mounted = true));

    const navOptions = ["about", "experience", "project", "skills"];

    let intSelected = -1;
    $: {
        const currentPage = $page.route.id ? $page.route.id.split("/")[1] : null;
        intSelected = currentPage ? navOptions.indexOf(currentPage) : -1;
    }

    const switchSection = (event) => {
        intSelected = parseInt(event.srcElement.id);
    };
</script>

<nav>
    <ul class="flex flex-col gap-6 my-12">
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
                        class={`${intSelected == i ? "pl-4 font-bold tracking-[0.2rem] before:border-accent before:bg-accent shadow-md before:shadow-[0px_0px_8px_3px] before:shadow-accent-light/30" : "before:border-primary hover:before:bg-primary"}
                         flex items-center transition-all text-primary before:transition-all before:w-4 before:h-4 before:mr-5 before:rounded-3xl before:border-solid   before:border-2 `}
                        id={i.toString()}
                        href={`/${option}`}
                        on:click={switchSection}
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
