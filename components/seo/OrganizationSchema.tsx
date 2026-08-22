export default function OrganizationSchema() {

    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",

        name: "Shree Deshna",

        alternateName: "श्री देशना",

        url: "https://shreedeshna.in",

        logo: "https://shreedeshna.in/logo/logo.png",

        description:
            "Shree Deshna (श्री देशना) is a digital archive of Hindi literature, Jain philosophy, culture, poetry and social thought.",

        sameAs: [
            // add social links here later
        ],
    };


    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
}