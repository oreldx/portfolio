<script>
    import Icon from "@iconify/svelte";
    import showdown from "showdown";
    import { expoOut } from "svelte/easing";
    import { blur } from "svelte/transition";

    let { data } = $props();

    const converter = new showdown.Converter();
</script>

<div
    class="flex flex-col gap-4"
    in:blur={{
        amount: 5,
        duration: 800,
        easing: expoOut,
    }}
>
    <a
        class="flex gap-2 items-center text-primary/70 hover:text-primary"
        href="/project"
        aria-label="Back to Projects"
    >
        <Icon icon="bxs:left-arrow" class=" text-l" />
        <p>Back</p>
    </a>
    <div class="flex flex-col gap-3">
        <div class="prose">
            {@html converter.makeHtml(data.content)}
        </div>
    </div>
</div>
