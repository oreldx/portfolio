<script>
    import Icon from "@iconify/svelte";
    import { slide } from "svelte/transition";

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
    class="w-28 h-28 rounded-xl bg-primary/20 dark:bg-primary/10 hover:text-accent drop-shadow-md flex justify-center items-center flex-col"
>
    {#if hovered}
        <p class="text-center text-sm leading-tight" transition:slide={{ duration: 200 }}>
            {name}
        </p>
    {/if}

    <Icon
        icon={icon ?? "pepicons-pop:circle"}
        class="danimate-bounce transition-all w-1/2 h-1/2 my-2"
    />
</div>
