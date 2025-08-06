<script>
    import HeaderContent from "$lib/components/HeaderContent.svelte";
    import { locale } from "$lib/i18n.js";
    import { experienceItems } from "data/experience.js";
    import showdown from "showdown";
    import { expoOut } from "svelte/easing";
    import { blur } from "svelte/transition";

    let { data } = $props();

    const activeLocale = $derived($locale);
    const currentContent = $derived(data.content?.[activeLocale] ?? Object.values(data.content)[0]);

    const converter = new showdown.Converter();

    const experienceData = $derived(experienceItems.find((item) => item.key === data.slug));
</script>

<div
    class="flex flex-col gap-4 w-full"
    in:blur={{
        amount: 5,
        duration: 800,
        easing: expoOut,
    }}
>
    <HeaderContent data={experienceData} />
    <hr class="h-px border-0 bg-primary" />
    <div class="prose-wrapper">
        {@html converter.makeHtml(currentContent)}
    </div>
</div>
