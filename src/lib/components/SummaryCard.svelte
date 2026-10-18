<script>
    import Icon from "@iconify/svelte";
    import { getButtonDataFromURL } from "$lib/utils";
    import { t } from "../i18n";

    let {
        sectionKey,
        items = undefined,
        htmlContent = undefined,
        children = undefined,
    } = $props();
</script>

<div class="card flex min-w-0 flex-col gap-4 justify-between h-full">
    <div class="flex flex-col gap-2">
        <h1 class="text-2xl font-bold">{$t(`summary.${sectionKey}.title`)}</h1>
        {#if items}
            <div class="mt-2 flex flex-col gap-5">
                {#each items as item (item.key)}
                    <section class="flex flex-col gap-2 border-t border-divider pt-5 first:border-t-0 first:pt-0">
                        <h2 class="text-lg font-semibold">{$t(`${sectionKey}.${item.key}.title`)}</h2>
                        <p class="text-sm text-zinc-600 dark:text-zinc-400">
                            {$t(`${sectionKey}.${item.key}.desc`)}
                        </p>
                        {#if item.readMore || item.externalLink}
                            <div class="mt-2 flex flex-wrap gap-2">
                                {#if item.readMore}
                                    <a
                                        href={`/${sectionKey}/${item.key}`}
                                        class="bg-surface-muted text-accent-dark dark:text-accent-light border border-accent px-4 py-2 text-sm rounded-sm hover:bg-accent-dark hover:text-white dark:hover:bg-accent-light dark:hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                                    >
                                        {$t("button.readMore")}
                                    </a>
                                {/if}
                                {#if item.externalLink}
                                    {@const externalButton = getButtonDataFromURL(item.externalLink)}
                                    <a
                                        href={item.externalLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="inline-flex items-center gap-1.5 bg-surface-muted text-accent-dark dark:text-accent-light border border-accent px-4 py-2 text-sm rounded-sm hover:bg-accent-dark hover:text-white dark:hover:bg-accent-light dark:hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                                    >
                                        <Icon icon={externalButton.icon} aria-hidden="true" />
                                        {$t(externalButton.labelKey)}
                                    </a>
                                {/if}
                            </div>
                        {/if}
                    </section>
                {/each}
            </div>
        {:else if htmlContent}
            <div class="prose-wrapper">
                {@html htmlContent}
            </div>
        {:else}
            {@render children?.()}
        {/if}
    </div>
    <div class="flex flex-wrap justify-end gap-2">
        <a
            href={`/${sectionKey}`}
            class="w-full px-4 py-2 text-center text-sm rounded-sm bg-accent-light text-black dark:bg-accent-dark dark:text-white hover:bg-accent-dark hover:text-white dark:hover:bg-accent-light dark:hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
            {$t(`summary.${sectionKey}.readMore`)}
        </a>
    </div>
</div>
