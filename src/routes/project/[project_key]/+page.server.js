import fs from "fs";
import path from "path";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    const slug = params.project_key;

    const filePath = path.resolve(`static/project/${slug}.md`);

    try {
        const markdown = fs.readFileSync(filePath, "utf-8");
        return {
            content: markdown,
            slug,
        };
    } catch (err) {
        throw error(404, "Project not found");
    }
}
