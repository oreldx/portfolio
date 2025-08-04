<script>
    import Footer from "$lib/components/Footer.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import Nav from "$lib/components/Nav.svelte";
    import "../app.css";
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();
</script>

<!-- <Background /> -->

<main class="flex mx-auto flex-col lg:flex-row px-5 md:px-10 lg:max-w-(--breakpoint-2xl) lg:px-20">
    <div class="flex-1 flex flex-col h-screen pt-20 pb-10 lg:sticky lg:top-0 lg:py-20">
        <Hero />
        <Nav />
        <Footer />
    </div>

    <div class="flex-1 flex items-center lg:py-20 pb-10">
        {@render children?.()}
    </div>
</main>
