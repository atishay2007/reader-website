"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function ArchiveSelector({
    years,
    selectedYear,
    basePath = "/articles",
}: {
    years: number[];
    selectedYear: number;
    basePath?: string;
}) {
    const router = useRouter();
    const searchParams = useSearchParams();

    function changeYear(year: number) {
        const params = new URLSearchParams(searchParams.toString());

        params.set("year", String(year));

        router.push(`${basePath}?${params.toString()}`);
    }

    return (
        <select
            value={selectedYear}
            onChange={(e) => changeYear(Number(e.target.value))}
            className="
                rounded-lg
                border
                border-[var(--border)]
                bg-[var(--paper)]
                px-6
                py-3
                text-lg
            "
        >
            {years.map((year) => (
                <option key={year} value={year}>
                    {year}
                </option>
            ))}
        </select>
    );
}