import { error } from "@sveltejs/kit";
import { getPosts, getPostContent } from "$lib/blog";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const post = (await getPosts()).find((post) => post.slug === params.slug);
    if (!post) error(404, "Article introuvable");
    const contents = Object.fromEntries(
        await Promise.all(
            Object.keys(post.translations).map(async (lang) => [
                lang,
                await getPostContent(post.slug, lang),
            ]),
        ),
    );
    return { post, contents };
}
