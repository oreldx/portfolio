<script>
    import { expoOut } from "svelte/easing";
    import { blur } from "svelte/transition";
    import { t } from "../i18n";

    let { children, key } = $props();
</script>

<div class="flex flex-col gap-8">
    <div
        class="flex flex-col gap-2"
        in:blur={{
            amount: 5,
            duration: 200,
            easing: expoOut,
        }}
    >
        {#if $t(`${key}.title`) != `${key}.title`}
            <h1 class="text-4xl font-bold">{$t(`${key}.title`)}</h1>
        {/if}
        {#if $t(`${key}.description`) != `${key}.description`}
            <p class="text-lg">{$t(`${key}.description`)}</p>
        {/if}
    </div>
    <div
        in:blur={{
            amount: 5,
            duration: 600,
            easing: expoOut,
        }}
        class="flex flex-col gap-8"
    >
        {@render children?.()}
    </div>
</div>
