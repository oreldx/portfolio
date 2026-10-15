<script>
    import { t } from "../i18n";

    let {
        sectionKey,
        secondaryLink = undefined,
        htmlContent = undefined,
        children = undefined,
    } = $props();
</script>

<div class="card flex flex-col gap-4 justify-between h-full">
    <div class="flex flex-col gap-2">
        <h1 class="text-2xl font-bold">{$t(`summary.${sectionKey}.title`)}</h1>
        {#if htmlContent}
            <div class="prose-wrapper">
                {@html htmlContent}
            </div>
        {:else}
            {@render children?.()}
        {/if}
    </div>
    <div class="flex justify-end gap-2">
        {#if secondaryLink}
            <a
                href={secondaryLink}
                class="bg-surface-muted text-accent-dark dark:text-accent-light border border-accent px-4 py-2 text-sm rounded-sm hover:bg-accent-dark hover:text-white dark:hover:bg-accent-light dark:hover:text-black"
            >
                {$t("button.readMore")}
            </a>
        {/if}
        <a
            href={`/${sectionKey}`}
            class="px-4 py-2 text-sm rounded-sm bg-accent-light text-black dark:bg-accent-dark dark:text-white hover:bg-accent-dark hover:text-white dark:hover:bg-accent-light dark:hover:text-black"
        >
            {$t(`summary.${sectionKey}.readMore`)}
        </a>
    </div>
</div>
