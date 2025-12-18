<script>
    import { getButtonDataFromURL, skillTypeOrder, splitSkillsByType } from "$lib/utils";
    import Icon from "@iconify/svelte";
    import { t } from "../i18n";
    import Tag from "./Tag.svelte";

    let { data, type } = $props();

    const splittedSkills = $derived.by(() => {
        if (data && data.tags) {
            const splitted = splitSkillsByType(data.tags);
            return Object.keys(splitted)
                .sort((a, b) => skillTypeOrder[a] - skillTypeOrder[b])
                .map((key) => splitted[key]);
        }
        return [];
    });
</script>

{#if data}
    <div class="flex flex-col gap-2 card">
        <h2 class="font-semibold">{$t(`${type}.${data.key}.title`)}</h2>

        <div class="flex justify-between">
            <p class="font-semibold">
                {$t(type + ".type" + "." + data.type)}
            </p>
            <p class="date whitespace-nowrap">
                {$t(`${type}.${data.key}.date`)}
            </p>
        </div>

        {#if data.tags && data.tags.length > 0}
            <div class="flex flex-col gap-2 mt-2">
                {#each splittedSkills as tagList}
                    <div class="flex flex-wrap gap-1">
                        {#each tagList as tag}
                            <Tag icon={tag.icon} type={tag.type} name={tag.name} size={"sm"} />
                        {/each}
                    </div>
                {/each}
            </div>
        {/if}

        <p class="text-sm mt-2">{$t(`${type}.${data.key}.desc`)}</p>

        {#if data.metrics && data.metrics.length > 0}
            <div
                class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mt-3 p-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 border border-zinc-700"
            >
                {#each data.metrics as metric}
                    <div
                        class="flex flex-col items-center justify-center text-center p-2 rounded-md bg-linear-to-tr from-stone-50 dark:from-zinc-950 to-stone-100 dark:to-zinc-900 border border-zinc-300 dark:border-zinc-700"
                    >
                        <Icon
                            icon={metric.icon ?? "mdi:chart-line"}
                            class="text-xl text-accent mb-1"
                        />
                        <span class="text-lg font-bold text-accent">{metric.value}</span>
                        <span class="text-xs leading-tight">
                            {$t(`${type}.${data.key}.metrics.${metric.label}`)}
                        </span>
                    </div>
                {/each}
            </div>
        {/if}

        <div class="flex justify-end gap-2 mt-2">
            {#if data.externalLink}
                <a
                    class="bg-stone-100 dark:bg-zinc-800 text-accent border border-accent px-4 py-2 text-sm rounded-sm hover:bg-accent hover:text-primary transition-colors"
                    href={data.externalLink}
                    target="_blank"
                    aria-label="External Link"
                >
                    <Icon icon={getButtonDataFromURL(data.externalLink).icon} class="text-lg" />
                </a>
            {/if}
            {#if data.readMore}
                <a
                    href={`/${type}/${data.key}`}
                    class="px-4 py-2 text-sm rounded-sm transition-colors bg-accent-light dark:bg-accent-dark hover:bg-accent dark:hover:bg-accent"
                    aria-label="Read More"
                >
                    {$t("button.readMore")}
                </a>
            {/if}
        </div>
    </div>
{/if}
