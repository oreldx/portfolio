<script>
    import { getIcon, getSkillColor } from "$lib/utils";
    import Icon from "@iconify/svelte";
    import { t } from "../i18n";

    let { data, type } = $props();
</script>

{#if data}
    <div
        class="card flex flex-col gap-2 bg-linear-to-tr from-stone-50 dark:from-zinc-950 to-stone-100 dark:to-zinc-900 rounded-xl p-5 shadow-md border border-zinc-700 hover:border-accent-light hover:shadow-[0px_0px_5px_5px] hover:shadow-accent/30 transition-colors duration-300"
    >
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

        <p class="text-sm mt-2">{$t(`${type}.${data.key}.desc`)}</p>

        <div class="flex justify-end gap-2">
            {#if data.externalLink}
                <a
                    class="bg-stone-100 dark:bg-zinc-800 text-accent border border-accent px-4 py-2 text-sm rounded-sm hover:bg-accent hover:text-primary transition-colors"
                    href={data.externalLink}
                    target="_blank"
                    aria-label="External Link"
                >
                    <Icon icon={getIcon(data.externalLink)} class="text-lg" />
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
