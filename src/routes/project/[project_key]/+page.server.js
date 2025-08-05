import { fetchMarkdownFiles } from "$lib/utils";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    try {
        const files = fetchMarkdownFiles("project", params.project_key);
        return {
            slug: params.project_key,
            content: files,
        };
    } catch (err) {
        throw error(404, "Project not found");
    }
}
