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
        .list("editor/books", {
            limit: 100,
        });



    if (error) {

        console.log("BOOK ERROR:", error);

        return NextResponse.json([]);

    }



    const priority = [
        "prakrit.jpg",
        "mookmati.jpg"
    ];



    const books = data
        .filter((file) =>
            file.name.match(/\.(jpg|jpeg|png|webp)$/i)
        )
        .sort((a, b) => {

            const aIndex =
                priority.indexOf(a.name);

            const bIndex =
                priority.indexOf(b.name);



            if (aIndex === -1 && bIndex === -1) {
                return 0;
            }


            if (aIndex === -1) {
                return 1;
            }


            if (bIndex === -1) {
                return -1;
            }


            return aIndex - bIndex;

        })
        .map((file) => ({

            name: file.name,

            url:
                `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/assets/editor/books/${encodeURIComponent(file.name)}`

        }));



    console.log("BOOKS:", books);



    return NextResponse.json(books);

}