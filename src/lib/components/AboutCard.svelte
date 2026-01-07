<script>
    import Icon from "@iconify/svelte";
    import { t } from "../i18n";

    let { type } = $props();
</script>

<div class="flex flex-col gap-2 card">
    <h2 class="font-semibold">{$t(`about.sections.${type}.title`)}</h2>
    <ul class="prose-wrapper">
        {#each $t(`about.sections.${type}.items`) as item}
            <li class="flex items-start">
                <Icon icon="mdi:circle-small" class="text-accent mt-1.5" />
                <div>
                    {@html item}
                </div>
            </li>
        {/each}
    </ul>
</div>
