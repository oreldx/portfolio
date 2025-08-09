<script>
    import { t } from "../i18n";

    let {
        sectionKey,
        secondaryLink = undefined,
        htmlContent = undefined,
        children = undefined,
    } = $props();
</script>

<div class="card flex flex-col gap-4 justify-between">
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
                class="bg-stone-100 dark:bg-zinc-800 text-accent border border-accent px-4 py-2 text-sm rounded-sm hover:bg-accent hover:text-primary transition-colors"
            >
                {$t("button.readMore")}
            </a>
        {/if}
        <a
            href={`/${sectionKey}`}
            class="px-4 py-2 text-sm rounded-sm transition-colors bg-accent-light dark:bg-accent-dark hover:bg-accent dark:hover:bg-accent"
        >
            {$t(`summary.${sectionKey}.readMore`)}
        </a>
    </div>
</div>
