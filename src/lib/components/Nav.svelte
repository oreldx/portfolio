<script>
    import { t } from "../i18n";
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { quartIn } from "svelte/easing";
    import { blur } from "svelte/transition";

    let mounted = false;
    onMount(() => (mounted = true));

    const navOptions = ["about", "experience", "projects", "skills"];

    let intSelected = -1;
    if ($page.route.id) {
        const currentPage = $page.route.id.split("/")[1];
        intSelected = navOptions.indexOf(currentPage);
    }

    const switchSection = (event) => {
        const clickedIndex = parseInt(event.srcElement.id);

        if (intSelected === clickedIndex) {
            intSelected = -1;
            window.location.href = "/";
            return;
        }
        intSelected = clickedIndex;
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
                        class={`${intSelected == i ? "active text-white before:opacity-100 before:bg-white" : "before:bg-transparent hover:text-white hover:before:opacity-100 hover:before:bg-white"} 
                        transition-all flex items-center before:transition-all before:w-4 before:h-4 before:mr-5 before:rounded-3xl before:border-solid before:border-white before:opacity-75 before:border-2`}
                        id={i.toString()}
                        href={`/${option}`}
                        on:click={switchSection}
                    >
                        {intSelected == i
                            ? $t("nav." + option).toUpperCase()
                            : $t("nav." + option)
                                  .charAt(0)
                                  .toUpperCase() + $t("nav." + option).slice(1)}
                    </a>
                </li>
            {/if}
        {/each}
    </ul>
</nav>
