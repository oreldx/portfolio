<script>
    import { t } from "../i18n";
    import Icon from "@iconify/svelte";
    import CardTypes from "$lib/enums/cardType";

    export let data;
    export let cardType;

    let cardHover = false;

    const getTypeKey = () => {
        switch (cardType) {
            case CardTypes.EXPERIENCE:
                return "experience.type";
            case CardTypes.PROJECT:
                return "projects.type";
            default:
                return "";
        }
    };

    const getIcon = (url) => {
        if (url.includes("github")) {
            return "mdi:github";
        }
        return "mdi:link";
    };
</script>

{#if data}
    <div
        class="p-4 grid rounded-xl gap-6 transition-all"
        class:bg-white={cardHover}
        class:bg-opacity-10={cardHover}
        class:backdrop-blur-l={cardHover}
        class:drop-shadow-md={cardHover}
    >
        <div class="date font-bold whitespace-nowrap w-min opacity-70">
            {$t(data.key + ".date")}
        </div>
        <div class="sm:col-start-2 flex flex-col gap-2">
            <h3 class="text-white font-bold">
                {$t(data.key + ".title")}
            </h3>
            <h4 class="font-semibold opacity-70">
                {$t(getTypeKey() + "." + data.type)}
            </h4>
            <div class="text-justify">
                {$t(data.key + ".desc")}
            </div>
            <div class="flex flex-wrap gap-3">
                {#each data.tags as tag}
                    <div
                        class="text-secondary-light bg-secondary-dark bg-opacity-50 color rounded-full px-3 py-1"
                    >
                        {tag}
                    </div>
                {/each}
            </div>
            {#if data.url.includes("https://")}
                <a
                    href={data.url ? data.url : null}
                    target="_blank"
                    on:mouseenter={() => (cardHover = true)}
                    on:mouseleave={() => (cardHover = false)}
                    class="flex gap-2 items-center justify-end mt-2 opacity-70 hover:opacity-100"
                >
                    <span class="text-white">{$t("button.viewOn")}</span>
                    <Icon icon={getIcon(data.url)} class="text-white text-xl" />
                </a>
            {:else}
                <a
                    href={data.url ? data.url : null}
                    on:mouseenter={() => (cardHover = true)}
                    on:mouseleave={() => (cardHover = false)}
                    class="flex gap-2 items-center justify-end mt-2 opacity-70 hover:opacity-100"
                >
                    <p class="text-white text-right">{$t("button.seeMore")}</p>
                    <Icon icon="bxs:right-arrow" class="text-white text-l" />
                </a>
            {/if}
        </div>
    </div>
{/if}
