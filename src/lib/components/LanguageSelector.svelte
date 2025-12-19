<script>
    import { locale, locales } from "../i18n";

    let activeLocale = $state($locale);
    const nextLocale = $derived.by(() => {
        const currentIndex = locales.indexOf(activeLocale);
        const nextIndex = (currentIndex + 1) % locales.length;
        return locales[nextIndex];
    });

    const switchLocale = () => {
        const currentIndex = locales.indexOf(activeLocale);
        const nextIndex = (currentIndex + 1) % locales.length;
        activeLocale = locales[nextIndex];
        $locale = activeLocale;
    };
</script>

<button
    onclick={switchLocale}
    class="flex items-center justify-center w-12 h-12 rounded-xl text-primary/70 hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-110 cursor-pointer"
    aria-label="Switch Language"
>
    <span class="text-lg font-semibold">{nextLocale.toUpperCase()}</span>
</button>
