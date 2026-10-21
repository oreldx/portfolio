import { error } from "@sveltejs/kit";
import { getPosts, selectPost } from "$lib/blog";

/** @param {string} value */
const xml = (value) =>
    value.replace(
        /[<>&"']/g,
        (character) =>
            ({
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;",
                '"': "&quot;",
                "'": "&apos;",
            })[character],
    );

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const lang = url.searchParams.get("lang") ?? "fr";
    if (lang !== "fr" && lang !== "en") error(400, "Unsupported feed language");
    const posts = (await getPosts()).map((post) => selectPost(post, lang));
    const blogUrl = xml(new URL("/blog", url.origin).href);
    const feedUrl = xml(new URL(`/rss.xml?lang=${lang}`, url.origin).href);
    const items = posts
        .map((post) => {
            const link = xml(new URL(`/blog/${post.slug}`, url.origin).href);
            return `<item><title>${xml(post.title)}</title><link>${link}</link><guid isPermaLink="true">${link}</guid><description>${xml(post.description)}</description><pubDate>${new Date(post.date).toUTCString()}</pubDate>${post.tags.map((tag) => `<category>${xml(tag)}</category>`).join("")}</item>`;
        })
        .join("");
    return new Response(
        `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Blog — Aurélien Dureux</title><link>${blogUrl}</link><description>Blog — Aurélien Dureux</description><language>${lang}</language><atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>${items}</channel></rss>`,
        {
            headers: {
                "Content-Type": "application/rss+xml; charset=utf-8",
                "Cache-Control": "public, max-age=300",
            },
        },
    );
}
