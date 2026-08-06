import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { COMMENTS_REQUIRE_APPROVAL } from "@/lib/config";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);



export async function GET(
    request: Request
) {

    const { searchParams } =
        new URL(request.url);


    const postId =
        searchParams.get("postId");


    if (!postId) {
        return NextResponse.json([]);
    }


let query = supabase
    .from("comments")
    .select("*")
    .eq("post_id", postId)
    .order(
        "created_at",
        {
            ascending: false
        }
    );


if (COMMENTS_REQUIRE_APPROVAL) {
    query = query.eq(
        "approved",
        true
    );
}


const { data, error } = await query;
        await supabase
            .from("comments")
            .select("*")
            .eq("post_id", postId)
            .eq("approved", true)
            .order(
                "created_at",
                {
                    ascending: false
                }
            );



    if (error) {

        console.log(error);

        return NextResponse.json(
            [],
            {
                status: 500
            }
        );

    }



    return NextResponse.json(data);

}




export async function POST(
    request: Request
) {

    const body =
        await request.json();


    const {
        postId,
        name,
        message
    } = body;



    if (
        !postId ||
        !name ||
        !message
    ) {

        return NextResponse.json(
            {
                error: "Missing fields"
            },
            {
                status: 400
            }
        );

    }



    const { error } =
        await supabase
            .from("comments")
            .insert({
                post_id: postId,
                name,
                message,
                approved: !COMMENTS_REQUIRE_APPROVAL,
            });



    if (error) {

        console.log(error);

        return NextResponse.json(
            {
                error: "Failed"
            },
            {
                status: 500
            }
        );

    }



    return NextResponse.json({
        success: true
    });

}