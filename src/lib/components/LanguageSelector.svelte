<script>
    import { locale, locales } from "../i18n";

    let activeLocale = $state($locale);
    let hovered = $state(false);

    const switchLocale = () => {
        const currentIndex = locales.indexOf(activeLocale);
        const nextIndex = (currentIndex + 1) % locales.length;
        activeLocale = locales[nextIndex];
        $locale = activeLocale;
    };
</script>

<div class="flex items-center space-x-2 text-primary/70 hover:text-primary">
    <button
        onclick={switchLocale}
        class="relative inline-flex items-center h-6 rounded-full w-11 border-2 border-primary/70 hover:border-primary cursor-pointer"
        onmouseover={() => {
            hovered = true;
        }}
        onmouseout={() => {
            hovered = false;
        }}
        onfocus={() => {}}
        onblur={() => {}}
        aria-label="Switch Language"
    >
        <span
            class={`${
                activeLocale === locales[0] ? "translate-x-1" : "translate-x-5"
            } ${hovered ? "bg-primary" : "bg-primary/70"} inline-block w-4 h-4 transform rounded-full transition-transform duration-200 ease-in-out   `}
        ></span>
    </button>
    <span>{activeLocale.toUpperCase()}</span>
</div>
