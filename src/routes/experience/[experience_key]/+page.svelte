<script>
    import AppPage from "$lib/components/AppPage.svelte";
    import HeaderContent from "$lib/components/HeaderContent.svelte";
    import { locale } from "$lib/i18n.js";
    import { experienceItems } from "data/experience.js";
    import showdown from "showdown";

    let { data } = $props();

    const activeLocale = $derived($locale);
    const currentContent = $derived(data.content?.[activeLocale] ?? Object.values(data.content)[0]);

    const converter = new showdown.Converter();

    const experienceData = $derived(experienceItems.find((item) => item.key === data.slug));
</script>

<AppPage key="experience">
    <HeaderContent data={experienceData} />
    <hr class="h-px border-0 bg-primary" />
    <div class="prose-wrapper">
        {@html converter.makeHtml(currentContent)}
    </div>
</AppPage>
