<script>
    import AppPage from "$lib/components/AppPage.svelte";
    import { locale } from "$lib/i18n.js";
    import showdown from "showdown";

    let { data } = $props();

    const activeLocale = $derived($locale);
    const currentContent = $derived(data.content?.[activeLocale] ?? Object.values(data.content)[0]);

    const converter = new showdown.Converter();
</script>

<AppPage key="about">
    <div class="prose-wrapper">
        {@html converter.makeHtml(currentContent)}
    </div>
</AppPage>
