<script>
    import { t } from "../i18n";
    import { locale, locales } from "../i18n";

    const nextLocale = $derived(locales[(locales.indexOf($locale) + 1) % locales.length]);
    const switchLocale = () => {
        $locale = nextLocale;
    };
</script>

<button onclick={switchLocale} class="dock-control" aria-label={$t("controls.language")}>
    <span class="text-lg font-semibold">{nextLocale.toUpperCase()}</span>
</button>
