<script>
    import { getButtonDataFromURL, splitSkillsByType } from "$lib/utils";
    import Icon from "@iconify/svelte";
    import { t } from "../i18n";
    import Tag from "./Tag.svelte";

    let { data, type } = $props();

    const splittedSkills = $derived.by(() => {
        const typeOrder = { hard: 0, bridge: 1, soft: 2 };
        if (data && data.tags) {
            const splitted = splitSkillsByType(data.tags);
            return Object.keys(splitted)
                .sort((a, b) => typeOrder[a] - typeOrder[b])
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

        <div class="flex justify-end gap-2">
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
