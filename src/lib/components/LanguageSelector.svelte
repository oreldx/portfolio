<script>
    import { locale, locales } from "../i18n";

    let activeLocale = $locale;

    const switchLocale = () => {
        const currentIndex = locales.indexOf(activeLocale);
        const nextIndex = (currentIndex + 1) % locales.length;
        activeLocale = locales[nextIndex];
        $locale = activeLocale;
    };
</script>

<p class="flex items-center space-x-2">
    <button
        on:click={switchLocale}
        class="relative inline-flex items-center h-6 rounded-full w-11 border-2 border-white"
    >
        <span
            class={`${
                activeLocale === locales[0] ? "translate-x-1" : "translate-x-5"
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out`}
        />
    </button>
    <span class="text-white">{activeLocale.toUpperCase()}</span>
</p>
