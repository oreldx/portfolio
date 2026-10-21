<script>
    import { page } from "$app/state";
    import { t, locale } from "$lib/i18n";
    import { formatPostDate, selectPost } from "$lib/blog";
    import RssLink from "$lib/components/RssLink.svelte";

    let { data } = $props();
    const posts = $derived(data.posts.map((post) => selectPost(post, $locale)));
    const canonical = $derived(new URL("/blog", page.url.origin).href);
</script>

<svelte:head>
    <title>Blog — Aurélien Dureux</title>
    <link rel="canonical" href={canonical} />
    <link
        rel="alternate"
        type="application/rss+xml"
        title="Blog — Aurélien Dureux"
        href={`/rss.xml?lang=${$locale}`}
    />
    <meta property="og:title" content="Blog — Aurélien Dureux" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonical} />
</svelte:head>

<section aria-labelledby="blog-title">
    <header class="mb-12 border-b border-divider pb-8">
        <div class="mb-5 flex items-center justify-end gap-4">
            <RssLink />
        </div>
        <h1 id="blog-title" class="font-bold text-4xl sm:text-5xl">Blog</h1>
    </header>

    {#if posts.length}
        <ul class="grid gap-6">
            {#each posts as post}
                <li>
                    <article class="card group" lang={post.lang}>
                        <div
                            class="mb-4 flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400"
                        >
                            <time datetime={post.date}>{formatPostDate(post.date, $locale)}</time>
                            <span aria-label={$t("blog.articleLanguage")}
                                >{post.lang === "fr" ? "Français" : "English"}</span
                            >
                        </div>
                        {#if post.lang !== $locale}
                            <p lang={$locale} class="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                                {$t("blog.translationMissing", {
                                    language: $t(`blog.languages.${post.lang}`),
                                })}
                            </p>
                        {/if}
                        <h2 class="font-bold text-2xl">
                            <a
                                class="rounded-sm hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
                                href={`/blog/${post.slug}`}>{post.title}</a
                            >
                        </h2>
                        <p class="mt-3 text-zinc-600 dark:text-zinc-400">{post.description}</p>
                        {#if post.tags.length}
                            <ul class="mt-5 flex flex-wrap gap-2" aria-label={$t("blog.tags")}>
                                {#each post.tags as tag}<li
                                        class="rounded-full bg-surface-muted px-3 py-1 text-xs"
                                    >
                                        {tag}
                                    </li>{/each}
                            </ul>
                        {/if}
                        <a
                            class="quiet-link mt-6 inline-block"
                            href={`/blog/${post.slug}`}
                            aria-label={`${$t("blog.read")} : ${post.title}`}>{$t("blog.read")} →</a
                        >
                    </article>
                </li>
            {/each}
        </ul>
    {:else}
        <p class="rounded-xl border border-divider bg-surface p-8 text-zinc-600 dark:text-zinc-400">
            {$t("blog.empty")}
        </p>
    {/if}
</section>
