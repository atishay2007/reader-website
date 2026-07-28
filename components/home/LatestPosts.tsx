export default function LatestPosts() {
  return (
    <section id="latest" className="border-t border-[var(--border)] py-20">

      <h2 className="text-4xl font-bold">
        Latest Articles
      </h2>

      <div className="mt-12 divide-y divide-[var(--border)]">

        <article className="flex items-center justify-between py-6">
          <div>
            <h3 className="text-2xl font-semibold">
              देवता धरती पर
            </h3>
            <p className="mt-2 text-[var(--muted)]">
              August 19, 2021
            </p>
          </div>
        </article>

        <article className="flex items-center justify-between py-6">
          <div>
            <h3 className="text-2xl font-semibold">
              साजन की पाती
            </h3>
            <p className="mt-2 text-[var(--muted)]">
              July 12, 2021
            </p>
          </div>
        </article>

      </div>

      <a
        href="/archive"
        className="mt-10 inline-block text-[var(--accent)] hover:underline"
      >
        View Archive →
      </a>

    </section>
  );
}
