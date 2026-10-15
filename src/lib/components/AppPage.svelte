<script>
    import { t } from "../i18n";

    let { children, key } = $props();
</script>

<div class="flex flex-col gap-8 w-full">
    <div class="flex flex-col gap-2">
        {#if $t(`${key}.title`) != `${key}.title`}
            <h1 class="text-4xl font-bold">{$t(`${key}.title`)}</h1>
        {/if}
        {#if $t(`${key}.description`) != `${key}.description`}
            <p class="text-lg">{$t(`${key}.description`)}</p>
        {/if}
    </div>
    <div class="flex flex-col gap-8">
        {@render children?.()}
    </div>
</div>
