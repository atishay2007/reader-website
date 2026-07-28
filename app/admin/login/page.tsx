"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function login() {
        const supabase = createClient();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            return;
        }

        router.push("/admin");
    }

    return (
        <main className="mx-auto max-w-md px-6 py-20">

            <h1 className="font-[var(--font-hindi)] text-4xl font-semibold">
                श्री देशना Admin
            </h1>

            <div className="mt-10 space-y-4">

                <input
                    className="w-full border p-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="w-full border p-3"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && (
                    <p className="text-red-600">
                        {error}
                    </p>
                )}

                <button
                    onClick={login}
                    className="w-full bg-black px-4 py-3 text-white"
                >
                    Login
                </button>

            </div>

        </main>
    );
}   