<script>
    import { locale } from "$lib/i18n.js";
    import showdown from "showdown";
    import { expoOut } from "svelte/easing";
    import { blur } from "svelte/transition";
    import { t } from "../../lib/i18n";

    let { data } = $props();

    const activeLocale = $derived($locale);
    const currentContent = $derived(data.content?.[activeLocale] ?? Object.values(data.content)[0]);

    const converter = new showdown.Converter();
</script>

<div
    in:blur={{
        amount: 5,
        duration: 800,
        easing: expoOut,
    }}
>
    <div class="prose-wrapper">
        {@html converter.makeHtml(currentContent)}
    </div>
</div>
