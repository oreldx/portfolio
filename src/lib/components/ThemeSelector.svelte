<script>
    import { t } from "../i18n";
    import Icon from "@iconify/svelte";
    import { toggleMode } from "mode-watcher";
</script>

<button onclick={toggleMode} class="dock-control" aria-label={$t("controls.theme")}>
    <Icon icon="si:moon-fill" class="text-2xl dark:hidden" />
    <Icon icon="ri:sun-fill" class="text-2xl hidden dark:block" />
</button>
