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
    class="w-28 h-28 rounded-xl bg-primary/20 hover:text-accent drop-shadow-md flex justify-center items-center flex-col"
>
    {#if hovered}
        <p class="text-center" transition:slide>
            {name}
        </p>
    {/if}

    <Icon {icon} class="danimate-bounce transition-all w-1/2 h-1/2 my-2" />
</div>
