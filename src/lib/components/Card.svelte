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

        {#if data.evolutions && data.evolutions.length > 0}
            <div
                class="flex flex-col gap-3 mt-4 pt-3 border-t border-zinc-300 dark:border-zinc-700"
            >
                {#each data.evolutions as evolution}
                    <div class="flex gap-3">
                        <div class="flex flex-col items-center gap-1 mt-1">
                            <div class="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600"></div>
                            <div
                                class="w-0.5 h-12 bg-gradient-to-b from-zinc-400 to-zinc-300 dark:from-zinc-600 dark:to-zinc-700"
                            ></div>
                        </div>
                        <div class="flex-1 pb-3">
                            <div class="flex items-start justify-between gap-2">
                                <div>
                                    <p class="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                        {$t(
                                            `${type}.${data.key}.evolutions.${evolution.key}.title`,
                                        )}
                                    </p>
                                    <p class="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                                        {$t(`${type}.${data.key}.evolutions.${evolution.key}.desc`)}
                                    </p>
                                </div>
                                {#if evolution.icon}
                                    <Icon
                                        icon={evolution.icon}
                                        class="text-lg text-accent flex-shrink-0 mt-0.5"
                                    />
                                {/if}
                            </div>
                            <div class="mt-2 px-2 py-1 rounded bg-accent/10 dark:bg-accent/5">
                                <span class="text-xs font-semibold text-accent">
                                    {$t(`${type}.${data.key}.evolutions.${evolution.key}.desc`)}
                                </span>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        {/if}

        {#if data.metrics && data.metrics.length > 0}
            <div
                class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mt-3 p-2 rounded-lg bg-gray-200 dark:bg-zinc-800 border border-zinc-700"
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
