<script>
    import Dock from "$lib/components/Dock.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import Nav from "$lib/components/Nav.svelte";
    import { ModeWatcher } from "mode-watcher";
    import "../app.css";
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();
</script>

<ModeWatcher />

<main class="flex mx-auto flex-col lg:flex-row px-5 md:px-10 lg:max-w-(--breakpoint-2xl) lg:px-20">
    <div class="flex-1 flex justify-between flex-col h-screen pt-10 lg:sticky lg:top-0 lg:py-20">
        <div class="flex flex-col gap-10">
            <Hero />
            <Nav />
        </div>
        <hr class="h-px border-0 bg-primary my-10 lg:hidden" />
    </div>

    <div class="flex-1 flex items-center lg:py-20 pb-16">
        {@render children?.()}
    </div>
</main>

<Dock />
