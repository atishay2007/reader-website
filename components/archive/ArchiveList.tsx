"use client";

export default function ArchiveSelector({
  years,
  selectedYear,
  onChange,
}: {
  years: number[];
  selectedYear: number;
  onChange: (year: number) => void;
}) {
  return (
    <select
      value={selectedYear}
      onChange={(e) => onChange(Number(e.target.value))}
      className="
        rounded-lg
        border
        border-[var(--border)]
        bg-[var(--background)]
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