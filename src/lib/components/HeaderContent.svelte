<script>
    import { t } from "$lib/i18n.js";
    import { getButtonDataFromURL, getSkillColor, skillTypeOrder } from "$lib/utils.js";
    import Icon from "@iconify/svelte";

    let { data } = $props();

    const ordredSkills = $derived(
        data.tags
            ? data.tags.sort((a, b) => skillTypeOrder[a.type] - skillTypeOrder[b.type])
            : undefined,
    );
</script>

<div class="flex flex-col w-full gap-4">
    <div class="flex flex-col gap-4">
        <div class="flex gap-4">
            <a
                class="flex gap-2 items-center bg-surface-muted text-accent-dark dark:text-accent-light border border-accent px-4 py-2 text-sm rounded-sm hover:bg-accent-dark hover:text-white dark:hover:bg-accent-light dark:hover:text-black"
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

        {#if ordredSkills && ordredSkills.length > 0}
            <div class="flex flex-wrap gap-2 mt-2">
                {#each ordredSkills as tag}
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
                class="flex gap-2 justify-center bg-surface-muted text-accent-dark dark:text-accent-light border border-accent px-4 py-2 text-sm rounded-sm hover:bg-accent-dark hover:text-white dark:hover:bg-accent-light dark:hover:text-black"
                href={data.externalLink}
                target="_blank"
            >
                <Icon icon={getButtonDataFromURL(data.externalLink).icon} class="text-lg" />
                {$t(getButtonDataFromURL(data.externalLink).labelKey)}
            </a>
        {/if}
    </div>
</div>
