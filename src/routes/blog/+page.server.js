import { getPosts } from "$lib/blog";

export async function load() {
    return { posts: await getPosts() };
}
