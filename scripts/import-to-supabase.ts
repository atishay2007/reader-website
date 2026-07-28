import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { XMLParser } from "fast-xml-parser";

dotenv.config({
    path: path.resolve(process.cwd(), ".env.local"),
});

async function main() {
    const { supabase } = await import("@/lib/supabase");

    const feedPath = process.env.BLOGGER_FEED_PATH;

    if (!feedPath) {
        throw new Error("Missing BLOGGER_FEED_PATH");
    }

    const xml = fs.readFileSync(feedPath, "utf8");

    const parser = new XMLParser({
        ignoreAttributes: false,
    });

    const feed = parser.parse(xml).feed;

    const entries = Array.isArray(feed.entry)
        ? feed.entry
        : [feed.entry];

    console.log(`Found ${entries.length} posts`);

    let imported = 0;

    for (const entry of entries) {
        const title =
            typeof entry.title === "string"
                ? entry.title
                : entry.title?.["#text"] || "Untitled";

        const content =
            typeof entry.content === "string"
                ? entry.content
                : entry.content?.["#text"] || "";

        const date = entry.published || entry.updated;

        const { error } = await supabase
            .from("posts")
            .insert({
                title,
                content,
                date,
                author: "Neelam Jain",
            });

        if (error) {
            console.error("Failed:", title);
            console.error(error);
            continue;
        }

        imported++;

        if (imported % 100 === 0) {
            console.log(`Imported ${imported}/${entries.length}`);
        }
    }

    console.log(`✅ Imported ${imported} posts`);
}

main();