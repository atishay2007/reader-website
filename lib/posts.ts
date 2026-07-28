import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type Post = {
    id: string;
    fileId: string;
    title: string;
    slug: string;
    date: string;
    content: string;
};

export function getAllPosts(): Post[] {
    const files = fs.readdirSync(postsDirectory);

    return files
        .filter((file) => file.endsWith(".json"))
        .map((file) => {
            const filePath = path.join(postsDirectory, file);

            return {
                ...JSON.parse(fs.readFileSync(filePath, "utf8")),
                fileId: file.replace(".json", ""),
            };
        })
        .sort(
            (a, b) =>
                new Date(b.date).getTime() -
                new Date(a.date).getTime()
        );
}

export function getPostById(id: string): Post | null {
    const filePath = path.join(postsDirectory, `${id}.json`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    return {
        ...JSON.parse(fs.readFileSync(filePath, "utf8")),
        fileId: id,
    };
}

export function getLatestPosts(limit = 10) {
    return getAllPosts().slice(0, limit);
}