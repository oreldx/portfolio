<script>
    import Icon from "@iconify/svelte";
    import { toggleMode } from "mode-watcher";

    let hovered = $state(false);
</script>

<div class="flex items-center space-x-2 text-primary/70 hover:text-primary">
    <button
        onclick={toggleMode}
        class="relative inline-flex items-center h-6 rounded-full w-11 border-2 border-primary/70 hover:border-primary cursor-pointer"
        onmouseover={() => {
            hovered = true;
        }}
        onmouseout={() => {
            hovered = false;
        }}
        onfocus={() => {}}
        onblur={() => {}}
        aria-label="Switch Theme"
    >
        <span
            class={`translate-x-1 dark:translate-x-5 ${hovered ? "bg-primary" : "bg-primary/70"} inline-block w-4 h-4 transform rounded-full transition-transform duration-200 ease-in-out`}
        ></span>
    </button>
    <Icon icon="si:moon-fill" class="w-4 h-4 hidden dark:block" />
    <Icon icon="ri:sun-fill" class="w-4 h-4 dark:hidden" />
</div>
