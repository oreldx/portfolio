<script>
    import { locale, locales } from "../i18n";

    let activeLocale = $locale;
    let hovered = false;

    const switchLocale = () => {
        const currentIndex = locales.indexOf(activeLocale);
        const nextIndex = (currentIndex + 1) % locales.length;
        activeLocale = locales[nextIndex];
        $locale = activeLocale;
    };
</script>

<div class="flex items-center space-x-2 text-primary/70 hover:text-primary">
    <button
        on:click={switchLocale}
        class="relative inline-flex items-center h-6 rounded-full w-11 border-2 border-primary/70 hover:border-primary cursor-pointer"
        on:mouseover={() => {
            hovered = true;
        }}
        on:mouseout={() => {
            hovered = false;
        }}
        on:focus={() => {}}
        on:blur={() => {}}
    >
        <span
            class={`${
                activeLocale === locales[0] ? "translate-x-1" : "translate-x-5"
            } ${hovered ? "bg-primary" : "bg-primary/70"} inline-block w-4 h-4 transform rounded-full transition-transform duration-200 ease-in-out   `}
        />
    </button>
    <span>{activeLocale.toUpperCase()}</span>
</div>
