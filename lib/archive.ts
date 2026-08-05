const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;

export function getCoverUrl(folder: string) {
    return `${SUPABASE_URL}/storage/v1/object/public/archive/${folder}/cover.png`;
}

export function getPdfUrl(folder: string) {
    return `${SUPABASE_URL}/storage/v1/object/public/archive/${folder}/issue.pdf`;
}