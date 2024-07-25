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

<div class="flex items-center space-x-2 hover-container hover:text-white">
    <button
        on:click={switchLocale}
        class="relative inline-flex items-center h-6 rounded-full w-11 border-2 hover-border"
    >
        <span
            class={`${
                activeLocale === locales[0] ? "translate-x-1" : "translate-x-5"
            } inline-block w-4 h-4 transform rounded-full transition-transform duration-200 ease-in-out hover-bg`}
        />
    </button>
    <span>{activeLocale.toUpperCase()}</span>
</div>

<style>
    .hover-border {
        border-color: rgba(255, 255, 255, 0.75);
    }
    .hover-bg {
        background-color: rgba(255, 255, 255, 0.75);
    }
    .hover-container:hover .hover-border {
        border-color: white;
    }

    .hover-container:hover .hover-bg {
        background-color: white;
    }
</style>
