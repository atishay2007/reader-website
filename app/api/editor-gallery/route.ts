import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {

    const { data, error } = await supabase
        .storage
        .from("assets")
        .list("editor/gallery", {
            limit: 100,
        });


    if (error) {
        console.log("SUPABASE ERROR:", error);
        return NextResponse.json([]);
    }


    const images = data
        .filter((file) =>
            file.name.match(/\.(jpg|jpeg|png|webp)$/i)
        )
        .map((file) => ({
            name: file.name,
            url:
                `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/editor/gallery/${file.name}`,
        }));


    console.log("GALLERY:", images);

    return NextResponse.json(images);
}