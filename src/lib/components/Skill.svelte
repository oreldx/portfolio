<script>
    import Icon from "@iconify/svelte";
    import { slide } from "svelte/transition";

    export let icon;
    export let name;

    let hovered = false;
</script>

<div
    role="listitem"
    on:mouseover={() => {
        hovered = true;
    }}
    on:mouseout={() => {
        hovered = false;
    }}
    on:focus={() => {}}
    on:blur={() => {}}
    class="w-28 h-28 rounded-xl bg-primary/20 hover:text-accent drop-shadow-md flex justify-center items-center flex-col"
>
    {#if hovered}
        <p class="text-center" transition:slide>
            {name}
        </p>
    {/if}

    <Icon {icon} class="danimate-bounce transition-all w-1/2 h-1/2 my-2" />
</div>
