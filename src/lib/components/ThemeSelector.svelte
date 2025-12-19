<script>
    import Icon from "@iconify/svelte";
    import { toggleMode } from "mode-watcher";
</script>

<button
    onclick={toggleMode}
    class="flex items-center justify-center w-12 h-12 rounded-xl text-primary/70 hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-110 cursor-pointer"
    aria-label="Switch Theme"
>
    <Icon icon="si:moon-fill" class="text-2xl dark:hidden" />
    <Icon icon="ri:sun-fill" class="text-2xl hidden dark:block" />
</button>
