<script>
    import Icon from "@iconify/svelte";

    let { icon, name } = $props();

    let hovered = $state(false);
</script>

<div
    role="listitem"
    onmouseover={() => {
        hovered = true;
    }}
    onmouseout={() => {
        hovered = false;
    }}
    onfocus={() => {}}
    onblur={() => {}}
    class="w-28 h-28 rounded-xl bg-surface-muted border border-divider hover:text-accent dark:hover:text-accent-light flex justify-center items-center flex-col"
>
    {#if hovered}
        <p class="text-center text-sm leading-tight">
            {name}
        </p>
    {/if}

    <Icon icon={icon ?? "pepicons-pop:circle"} class="  w-1/2 h-1/2 my-2" />
</div>
