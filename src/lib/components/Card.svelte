<script>
    import Icon from "@iconify/svelte";
    import { getButtonDataFromURL, skillTypeOrder, splitSkillsByType } from "$lib/utils";
    import { t } from "../i18n";
    import Tag from "./Tag.svelte";

    let { data, type } = $props();
    const splittedSkills = $derived.by(() => {
        const groups = splitSkillsByType(data?.tags ?? []);
        return Object.keys(groups)
            .sort((a, b) => skillTypeOrder[a] - skillTypeOrder[b])
            .map((key) => groups[key]);
    });
    const hasDetails = $derived(
        data && (data.evolutions?.length || data.metrics?.length),
    );
</script>

{#if data}
    <article class="min-w-0 rounded-xl border border-divider bg-surface p-5">
        <div class="flex flex-col gap-3">
            <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                <h2 class="text-xl font-semibold">{$t(`${type}.${data.key}.title`)}</h2>
                <p class="text-xs text-zinc-600 dark:text-zinc-400">
                    {$t(`${type}.${data.key}.date`)}
                </p>
            </div>
            <p class="text-xs text-zinc-600 dark:text-zinc-400">
                {$t(`${type}.type.${data.type}`)}
            </p>
            <p class="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {$t(`${type}.${data.key}.desc`)}
            </p>
            {#if splittedSkills.length}
                <div class="flex flex-wrap gap-2">
                    {#each splittedSkills as tags}
                        {#each tags as tag}
                            <Tag icon={tag.icon} type={tag.type} name={tag.name} />
                        {/each}
                    {/each}
                </div>
            {/if}
        </div>

        {#if hasDetails}
            <details class="mt-5">
                <summary class="quiet-link w-fit cursor-pointer">{$t("button.details")}</summary>
                <div class="mt-4 flex flex-col gap-5">
                    {#if data.evolutions?.length}
                        <div class="flex flex-col gap-5">
                            {#each data.evolutions as evolution}
                                <section class="border-t border-zinc-200 dark:border-zinc-800 pt-4">
                                    <h3 class="text-base font-semibold">
                                        {$t(
                                            `${type}.${data.key}.evolutions.${evolution.key}.title`,
                                        )}
                                    </h3>
                                    <p
                                        class="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
                                    >
                                        {$t(`${type}.${data.key}.evolutions.${evolution.key}.desc`)}
                                    </p>
                                    <p class="mt-2 text-sm leading-relaxed">
                                        <span class="font-semibold">{$t("button.result")}</span>
                                        {$t(
                                            `${type}.${data.key}.evolutions.${evolution.key}.result`,
                                        )}
                                    </p>
                                </section>
                            {/each}
                        </div>
                    {/if}
                    {#if data.metrics?.length}
                        <ul
                            class="flex flex-col gap-2 border-t border-zinc-200 dark:border-zinc-800 pt-4"
                        >
                            {#each data.metrics as metric}
                                <li class="text-sm">
                                    <span class="font-semibold">{metric.value}</span>
                                    <span class="text-zinc-600 dark:text-zinc-400"
                                        >{$t(`${type}.${data.key}.metrics.${metric.label}`)}</span
                                    >
                                </li>
                            {/each}
                        </ul>
                    {/if}
                    {#if data.externalLink && data.readMore}
                        <a
                            class="quiet-link inline-flex w-fit items-center gap-1.5"
                            href={data.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            ><Icon icon="mdi:web" aria-hidden="true" />
                            {$t("button.viewOn")}
                            {getButtonDataFromURL(data.externalLink).text ??
                                $t("button.website")}</a
                        >
                    {/if}
                </div>
            </details>
        {/if}
        {#if data.readMore}
            <a href={`/${type}/${data.key}`} class="quiet-link mt-4 inline-block"
                >{$t("button.readMore")} <span class="inline-block" aria-hidden="true">→</span></a
            >
        {:else if data.externalLink}
            <a
                href={data.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                class="quiet-link mt-4 inline-flex items-center gap-1.5"
                ><Icon icon="mdi:web" aria-hidden="true" />
                {$t("button.viewOn")}
                {getButtonDataFromURL(data.externalLink).text ?? $t("button.website")}</a
            >
        {/if}
    </article>
{/if}
