"use client";

import { useEffect, useState } from "react";


type Comment = {
    id: string;
    name: string;
    message: string;
    created_at: string;
};



export default function Comments({
    postId,
}: {
    postId: string;
}) {


    const [comments, setComments] = useState<Comment[]>([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);





    useEffect(() => {

        async function fetchComments() {

            const res = await fetch(
                `/api/comments?postId=${postId}`
            );

            const data = await res.json();

            setComments(data);

        }


        fetchComments();

    }, [postId]);



    async function submitComment(
        e: React.FormEvent
    ) {

        e.preventDefault();


        if (!name || !message) return;


        setLoading(true);


        await fetch(
            "/api/comments",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    postId,
                    name,
                    message,
                }),
            }
        );


        setName("");
        setMessage("");
        setLoading(false);
        



    }




    return (

        <section
            className="
            mt-20
            border-t
            border-[var(--border)]
            pt-12
            "
        >

            <h2
                className="
                font-[var(--font-hindi)]
                text-3xl
                font-semibold
                "
            >
                टिप्पणियाँ
            </h2>



            <form
                onSubmit={submitComment}
                className="
                mt-8
                space-y-5
                "
            >

                <input
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                    placeholder="आपका नाम"
                    className="
                    w-full
                    rounded-md
                    border
                    border-[var(--border)]
                    bg-[var(--paper)]
                    px-5
                    py-3
                    outline-none
                    transition-all
                    duration-500
                    focus:w-[90%]
                    focus:border-[var(--gold)]
                    "
                />



                <textarea
                    value={message}
                    onChange={(e) =>
                        setMessage(e.target.value)
                    }
                    placeholder="अपनी टिप्पणी लिखें..."
                    className="
                    min-h-[120px]
                    w-full
                    resize-none
                    rounded-md
                    border
                    border-[var(--border)]
                    bg-[var(--paper)]
                    px-5
                    py-4
                    outline-none
                    transition-all
                    duration-500
                    focus:min-h-[200px]
                    focus:border-[var(--gold)]
                    "
                />



                <button
                    disabled={loading}
                    className="
                    rounded-md
                    border
                    border-[var(--gold)]
                    px-6
                    py-3
                    transition
                    hover:bg-[var(--gold)]
                    hover:text-black
                    "
                >
                    {loading
                        ? "भेजा जा रहा है..."
                        : "टिप्पणी भेजें"
                    }
                </button>
                {submitted && (
                    <p
                        className="
        text-sm
        text-[var(--gold)]
        "
                    >
                        आपकी टिप्पणी भेज दी गई है।
                    </p>
                )}
            </form>




            <div
                className="
                mt-12
                space-y-6
                "
            >

                {comments.map((comment) => (

                    <div
                        key={comment.id}
                        className="
                        border-b
                        border-[var(--border)]
                        pb-5
                        "
                    >

                        <p
                            className="
                            font-semibold
                            text-[var(--accent)]
                            "
                        >
                            {comment.name}
                        </p>


                        <p
                            className="
                            mt-2
                            text-[var(--muted)]
                            "
                        >
                            {comment.message}
                        </p>

                    </div>

                ))}

            </div>


        </section>

    );
}