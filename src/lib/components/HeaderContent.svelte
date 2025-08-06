<script>
    import { t } from "$lib/i18n.js";
    import { getButtonDataFromURL, getSkillColor } from "$lib/utils.js";
    import Icon from "@iconify/svelte";

    let { data } = $props();
</script>

<div class="flex flex-col w-full gap-4">
    <div class="flex flex-col gap-4">
        <div class="flex gap-4">
            <a
                class="flex gap-2 items-center bg-stone-100 dark:bg-zinc-800 text-accent border border-accent px-4 py-2 text-sm rounded-sm hover:bg-accent hover:text-primary transition-colors"
                href="/project"
                aria-label="Back to Projects"
            >
                <Icon icon="bxs:left-arrow" class=" text-l" />
                <p>{$t("button.back")}</p>
            </a>
            <div class="w-full flex flex-col gap-4">
                <h4 class="font-semibold">{$t(`project.${data.key}.title`)}</h4>
                <div class="flex justify-between">
                    <p class="font-semibold">
                        {$t(`project.type.${data.type}`)}
                    </p>
                    <p class="date whitespace-nowrap">
                        {$t(`project.${data.key}.date`)}
                    </p>
                </div>
                <hr class="h-px border-0 bg-primary" />
            </div>
        </div>

        {#if data.tags && data.tags.length > 0}
            <div class="flex flex-wrap gap-2 mt-2">
                {#each data.tags as tag}
                    <span
                        class={`flex items-center justify-center gap-2 px-3 py-1 rounded-full text-sm border ${getSkillColor(tag?.type)}`}
                    >
                        <Icon icon={tag?.icon ?? "pepicons-pop:circle"} />
                        {tag?.name ?? tag}
                    </span>
                {/each}
            </div>
        {/if}
        {#if data.externalLink}
            <a
                class="flex gap-2 justify-center bg-stone-100 dark:bg-zinc-800 text-accent border border-accent px-4 py-2 text-sm rounded-sm hover:bg-accent hover:text-primary transition-colors"
                href={data.externalLink}
                target="_blank"
                aria-label="External Link"
            >
                <Icon icon={getButtonDataFromURL(data.externalLink).icon} class="text-lg" />
                {getButtonDataFromURL(data.externalLink).text}
            </a>
        {/if}
    </div>
</div>
