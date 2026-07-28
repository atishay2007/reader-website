"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import Image from "@tiptap/extension-image";
import { Extension } from "@tiptap/core";
import { createClient } from "@/lib/supabase/client";

const FontSize = Extension.create({
    name: "fontSize",

    addGlobalAttributes() {
        return [
            {
                types: ["textStyle"],
                attributes: {
                    fontSize: {
                        default: null,

                        parseHTML: (element) =>
                            element.style.fontSize,

                        renderHTML: (attributes) => {
                            if (!attributes.fontSize) {
                                return {};
                            }

                            return {
                                style: `font-size: ${attributes.fontSize}`,
                            };
                        },
                    },
                },
            },
        ];
    },

    addCommands() {
        return {
            setFontSize:
                (fontSize: string) =>
                    ({ chain }: any) => {
                        return chain()
                            .setMark("textStyle", {
                                fontSize,
                            })
                            .run();
                    },
        };
    },
});


export default function PostEditor({
    content,
    setContent,
}: {
    content: string;
    setContent: (value: string) => void;
}) {

    const editor = useEditor({

        extensions: [
            StarterKit,
            TextStyle,
            FontSize,
            Image,
        ],

        content,

        onUpdate({ editor }) {
            setContent(editor.getHTML());
        },

        immediatelyRender: false,

        editorProps: {
            attributes: {
                class:
                    "min-h-[400px] p-5 font-[var(--font-hindi)] text-lg leading-loose outline-none",
            },
        },

    });


    if (!editor) {
        return (
            <p>
                Editor loading...
            </p>
        );
    }
    async function uploadImage() {
        const input = document.createElement("input");

        input.type = "file";
        input.accept = "image/*";

        input.onchange = async () => {
            const file = input.files?.[0];

            if (!file) return;

            const supabase = createClient();

            const fileName = `${Date.now()}-${file.name}`;

            const { error } = await supabase.storage
                .from("post-images")
                .upload(fileName, file);

            if (error) {
                alert(error.message);
                return;
            }

            const {
                data: { publicUrl },
            } = supabase.storage
                .from("post-images")
                .getPublicUrl(fileName);


            editor
                ?.chain()
                .focus()
                .insertContent({
                    type: "image",
                    attrs: {
                        src: publicUrl,
                    },
                })
                .run();
        };

        input.click();
    }

    return (
        <div className="border border-[var(--border)]">


            <div className="
        flex
        gap-2
        border-b
        border-[var(--border)]
        p-3
      ">


                <button
                    type="button"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleBold()
                            .run()
                    }
                    className="border px-3 py-1 font-bold"
                >
                    B
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleItalic()
                            .run()
                    }
                    className="border px-3 py-1 italic"
                >
                    I
                </button>


                <button
                    type="button"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .setFontSize("24px")
                            .run()
                    }
                    className="border px-3 py-1"
                >
                    बड़ा
                </button>


                <button
                    type="button"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .setFontSize("14px")
                            .run()
                    }
                    className="border px-3 py-1"
                >
                    छोटा
                </button>

                <button
                    type="button"
                    onClick={uploadImage}
                    className="border px-3 py-1"
                >
                    🖼
                </button>


            </div>


            <EditorContent editor={editor} />


        </div>
    );
}