"use client";

export default function YearSelector({
    years,
    selectedYear,
}: {
    years: number[];
    selectedYear: number;
}) {
    return (
        <select
            value={selectedYear}
            onChange={(e) => {
                window.location.href = `/archive?year=${e.target.value}`;
            }}
            className="
rounded-lg
border
border-[var(--border)]
bg-[var(--background)]
px-5
py-3
text-lg
"
        >
    {
        years.map((year) => (
            <option key={year} value={year}>
                {year}
            </option>
        ))
    }
        </select >
    );
}