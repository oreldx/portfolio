<script>
    import Dock from "$lib/components/Dock.svelte";
    import { onMount } from "svelte";
    import { page } from "$app/state";
    import { readingMode } from "$lib/stores/reading";
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
    const narrowReading = $derived(
        page.url.pathname === "/about" ||
            page.url.pathname.startsWith("/project/") ||
            page.url.pathname.startsWith("/experience/"),
    );

    onMount(() => {
        try {
            readingMode.set(sessionStorage.getItem("portfolio-reading") === "true");
        } catch {
            // The toggle remains usable when browser storage is unavailable.
        }
        return readingMode.subscribe((enabled) => {
            try {
                sessionStorage.setItem("portfolio-reading", String(enabled));
            } catch {
                // Keep the preference in memory for this visit.
            }
        });
    });
</script>

<ModeWatcher />

{#if $readingMode}
    <header
        class="mx-auto flex max-w-[960px] flex-wrap items-center justify-between gap-6 border-b border-divider px-5 py-6 sm:mx-6 lg:mx-auto"
    >
        <a
            href="/"
            class="font-bold text-xl rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >Aurélien Dureux</a
        >
        <Nav compact />
    </header>
    <main
        class="mx-auto w-full px-5 pt-10 pb-28 sm:px-8"
        style:max-width={narrowReading ? "720px" : "960px"}
    >
        {@render children?.()}
    </main>
{:else}
    <main
        class="flex mx-auto flex-col lg:flex-row px-3 md:px-10 lg:max-w-(--breakpoint-2xl) lg:px-20 lg:gap-4 lg:pb-4 pb-24"
    >
        <div
            class="flex-1 flex justify-between flex-col h-screen pt-10 lg:sticky lg:top-0 lg:py-20"
        >
            <div class="flex flex-col gap-10">
                <Hero />
                <Nav />
            </div>
            <hr class="h-px border-0 bg-primary mt-2 mb-5 lg:hidden" />
        </div>

        <div class="flex-1 min-w-0 flex items-center lg:py-20">
            {@render children?.()}
        </div>
    </main>
{/if}

<Dock />
