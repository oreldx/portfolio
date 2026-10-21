<script>
    import { page } from "$app/state";
    import { t, locale } from "$lib/i18n";
    import { formatPostDate, selectPost } from "$lib/blog";
    import RssLink from "$lib/components/RssLink.svelte";

    let { data } = $props();
    const post = $derived(selectPost(data.post, $locale));
    const Content = $derived(data.contents[post.lang]);
    const canonical = $derived(new URL(`/blog/${post.slug}`, page.url.origin).href);
    const structuredData = $derived(
        JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            inLanguage: post.lang,
            author: { "@type": "Person", name: "Aurélien Dureux" },
            mainEntityOfPage: canonical,
            url: canonical,
        }).replace(/</g, "\\u003c"),
    );
</script>

<svelte:head>
    <title>{post.title} — Aurélien Dureux</title>
    <meta name="description" content={post.description} />
    <link rel="canonical" href={canonical} />
    <link
        rel="alternate"
        type="application/rss+xml"
        title="Blog — Aurélien Dureux"
        href={`/rss.xml?lang=${$locale}`}
    />
    <meta property="og:title" content={post.title} />
    <meta property="og:description" content={post.description} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={canonical} />
    <meta property="og:locale" content={post.lang === "fr" ? "fr_FR" : "en_US"} />
    <meta property="article:published_time" content={post.date} />
    <meta name="twitter:card" content="summary" />
    {@html `<script type="application/ld+json">${structuredData}</script>`}
</svelte:head>

<a class="quiet-link mb-10 inline-block" href="/blog">← {$t("blog.back")}</a>
{#if post.lang !== $locale}
    <p lang={$locale} class="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
        {$t("blog.translationMissing", { language: $t(`blog.languages.${post.lang}`) })}
    </p>
{/if}
<article lang={post.lang}>
    <header class="mb-10 border-b border-divider pb-8">
        <time class="text-sm text-zinc-600 dark:text-zinc-400" datetime={post.date}
            >{formatPostDate(post.date, $locale)}</time
        >
        <h1 class="mt-4 text-4xl font-bold leading-tight sm:text-5xl">{post.title}</h1>
        <p class="mt-5 text-lg text-zinc-600 dark:text-zinc-400">{post.description}</p>
        {#if post.tags.length}
            <ul class="mt-6 flex flex-wrap gap-2" aria-label={$t("blog.tags")}>
                {#each post.tags as tag}<li class="rounded-full bg-surface-muted px-3 py-1 text-xs">
                        {tag}
                    </li>{/each}
            </ul>
        {/if}
    </header>
    <div class="prose-wrapper blog-prose dark:prose-invert">
        {#key post.slug + post.lang}<Content />{/key}
    </div>
</article>
<footer class="mt-12 flex flex-wrap justify-between gap-5 border-t border-divider pt-6">
    <a class="quiet-link" href="/blog">← {$t("blog.back")}</a>
    <RssLink />
</footer>
