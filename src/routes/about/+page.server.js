import { fetchMarkdownFiles } from "$lib/utils";
import { error } from "@sveltejs/kit";

export async function load() {
    try {
        const files = fetchMarkdownFiles(null, "about");
        return {
            content: files,
        };
    } catch (err) {
        throw error(404, "About not found");
    }
}
