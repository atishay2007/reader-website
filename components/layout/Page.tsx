type PageProps = {
    children: React.ReactNode;
};

export default function Page({ children }: PageProps) {
    return (
        <main className="mx-auto max-w-6xl px-6 py-8 md:py-12">      
        {children}
        </main>
    );
}
