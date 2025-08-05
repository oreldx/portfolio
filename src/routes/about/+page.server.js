import { fetchMarkdownFiles } from "$lib/utils";
import { error } from "@sveltejs/kit";

export async function load({ fetch }) {
    try {
        const files = await fetchMarkdownFiles(fetch, null, "about");
        return {
            content: files,
        };
    } catch (err) {
        throw error(404, "About not found");
    }
}
