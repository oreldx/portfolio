/** @typedef {{ slug: string, title: string, description: string, date: string, tags: string[], lang: string }} PostTranslation */
/** @typedef {{ slug: string, date: string, translations: Record<string, PostTranslation> }} Post */

/** @param {{ path: string, metadata: Record<string, unknown> }[]} entries @returns {Post[]} */
export function buildPosts(entries) {
    /** @type {Map<string, Post>} */
    const posts = new Map();
    for (const { path, metadata: meta } of entries) {
        if (meta?.published !== true) continue;
        const match = path.match(/\/([a-z0-9]+(?:-[a-z0-9]+)*)\/(fr|en)\.md$/);
        if (
            !match ||
            (meta.lang !== undefined && meta.lang !== match[2]) ||
            typeof meta.title !== "string" ||
            !meta.title.trim() ||
            typeof meta.description !== "string" ||
            !meta.description.trim() ||
            typeof meta.date !== "string" ||
            !/^\d{4}-\d{2}-\d{2}$/.test(meta.date) ||
            !Number.isFinite(Date.parse(meta.date)) ||
            new Date(meta.date).toISOString().slice(0, 10) !== meta.date ||
            (meta.tags !== undefined &&
                (!Array.isArray(meta.tags) || meta.tags.some((tag) => typeof tag !== "string")))
        )
            throw new Error(`Invalid blog metadata: ${path}`);
        const [, slug, lang] = match;
        const post = posts.get(slug) ?? { slug, date: meta.date, translations: {} };
        if (post.date !== meta.date)
            throw new Error(`Blog translations must share a publication date: ${path}`);
        if (post.translations[lang]) throw new Error(`Duplicate blog translation: ${path}`);
        post.translations[lang] = {
            slug,
            lang,
            title: meta.title,
            description: meta.description,
            date: meta.date,
            tags: /** @type {string[]} */ (meta.tags ?? []),
        };
        posts.set(slug, post);
    }
    return [...posts.values()].sort(
        (a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug),
    );
}

/** @param {Post} post @param {string} lang @returns {PostTranslation} */
export function selectPost(post, lang) {
    return post.translations[lang] ?? post.translations.fr ?? post.translations.en;
}
