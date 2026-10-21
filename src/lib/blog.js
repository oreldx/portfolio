import { buildPosts } from "./blog-catalog.js";
export { selectPost } from "./blog-catalog.js";

/** @typedef {{ metadata: Record<string, unknown>, default: import('svelte').Component }} PostModule */
const modules = /** @type {Record<string, () => Promise<PostModule>>} */ (
    import.meta.glob("/src/content/blog/*/*.md", { eager: false })
);

export async function getPosts() {
    return buildPosts(
        await Promise.all(
            Object.entries(modules).map(async ([path, load]) => ({
                path,
                metadata: (await load()).metadata,
            })),
        ),
    );
}

/** @param {string} slug @param {string} lang */
export async function getPostContent(slug, lang) {
    return (await modules[`/src/content/blog/${slug}/${lang}.md`]()).default;
}

/** @param {string} date @param {string} lang */
export function formatPostDate(date, lang) {
    return new Intl.DateTimeFormat(lang, { dateStyle: "long", timeZone: "UTC" }).format(
        new Date(date),
    );
}
