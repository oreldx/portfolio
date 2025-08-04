import { locales } from "$lib/i18n";
import { error } from "@sveltejs/kit";
import fs from "fs";
import path from "path";

export async function load({ params }) {
    const slug = params.project_key;

    try {
        const markdown = locales.reduce((acc, locale) => {
            const filePath = path.resolve(`static/project/${slug}_${locale}.md`);
            if (fs.existsSync(filePath)) {
                const content = fs.readFileSync(filePath, "utf-8");
                acc[locale] = content;
            }
            return acc;
        }, {});
        if (Object.keys(markdown).length === 0) {
            throw new Error("No markdown files found for this project");
        }
        return {
            content: markdown,
            slug,
        };
    } catch (err) {
        throw error(404, "Project not found");
    }
}
