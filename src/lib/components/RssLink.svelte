<script>
    import { t, locale } from "$lib/i18n";
</script>

<a
    href={`/rss.xml?lang=${$locale}`}
    class="group inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-accent dark:text-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
>
    <span class="group-hover:underline underline-offset-4">{$t("blog.subscribe")}</span>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-4 shrink-0"
        aria-hidden="true"
        focusable="false"
    >
        <path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" />
        <circle cx="5" cy="19" r="1" />
    </svg>
</a>
