"use client";

export default function SearchBar({
  search,
}: {
  search: string;
}) {
  return (
    <input
      defaultValue={search}
      placeholder="लेख खोजें..."
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          const value = e.currentTarget.value;

          window.location.href = `/archive?search=${encodeURIComponent(value)}`;
        }
      }}
      className="
        w-full
        rounded-lg
        border
        border-[var(--border)]
        bg-[var(--background)]
        px-5
        py-3
        text-lg
        outline-none
      "
    />
  );
}