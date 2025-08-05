import { fetchMarkdownFiles } from "$lib/utils";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    try {
        const files = fetchMarkdownFiles("experience", params.experience_key);
        return {
            slug: params.experience_key,
            content: files,
        };
    } catch (err) {
        throw error(404, "Experience not found");
    }
}
