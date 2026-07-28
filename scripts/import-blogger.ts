import dotenv from "dotenv";

dotenv.config({ path: ".env.local" }); import fs from "fs";
import path from "path";
import { XMLParser } from "fast-xml-parser";
import slugify from "slugify";
import sanitizeHtml from "sanitize-html";

const feedPath = process.env.BLOGGER_FEED_PATH;

if (!feedPath) {
    throw new Error("Missing BLOGGER_FEED_PATH");
}

const outputDir = path.join(process.cwd(), "content/posts");

fs.mkdirSync(outputDir, { recursive: true });

const xml = fs.readFileSync(feedPath, "utf8");

const parser = new XMLParser({
    ignoreAttributes: false,
});

const parsed = parser.parse(xml);

const entries = Array.isArray(parsed.feed.entry)
    ? parsed.feed.entry
    : [parsed.feed.entry];

let imported = 0;

for (const entry of entries) {
    const title =
        typeof entry.title === "string"
            ? entry.title.trim()
            : entry.title?.["#text"] || "Untitled";

    const content =
        typeof entry.content === "string"
            ? entry.content
            : entry.content?.["#text"] || "";

    const slug =
        slugify(title, {
            lower: true,
            strict: true,
            locale: "hi",
        }) || `post-${imported}`;

    const post = {
        id: entry.id,
        title,
        slug,
        date: entry.published || null,
        content: sanitizeHtml(content, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
            allowedAttributes: {
                img: ["src", "alt", "width", "height"],
            },
        }),
    };

    fs.writeFileSync(
        path.join(outputDir, `${imported}.json`),

        JSON.stringify(post, null, 2),
        "utf8"
    );

    imported++;
}

console.log(`✅ Imported ${imported} posts`);
