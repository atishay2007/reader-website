import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-20">

            <header className="mb-14 text-center">

                <h1
                    className="
                    font-[var(--font-hindi)]
                    text-5xl
                    font-semibold
                    "
                >
                    हमारे बारे में
                </h1>

                <p
                    className="
                    mt-5
                    font-[var(--font-hindi)]
                    text-lg
                    text-[var(--muted)]
                    "
                >
                    श्री देशना की यात्रा और उद्देश्य
                </p>

            </header>


            <section
                className="
                border
                border-[var(--border)]
                bg-[var(--paper)]
                p-8
                md:p-12
                "
            >

                <p
                    className="
                    font-[var(--font-hindi)]
                    text-xl
                    leading-[2.2]
                    "
                >
                    श्री देशना हिंदी साहित्य, जैन दर्शन,
                    संस्कृति और सामाजिक चिंतन से जुड़ी
                    रचनाओं का एक डिजिटल संग्रह है।
                    इस मंच का उद्देश्य वर्षों से प्रकाशित
                    लेखों, विचारों और साहित्यिक रचनाओं को
                    सुरक्षित रूप से आने वाली पीढ़ियों तक
                    पहुँचाना है।
                </p>

            </section>


            <section className="mt-20">

                <h2
                    className="
                    mb-10
                    text-center
                    font-[var(--font-hindi)]
                    text-4xl
                    font-semibold
                    "
                >
                    संपादक परिचय
                </h2>


                <div
                    className="
                    border
                    border-[var(--border)]
                    bg-[var(--paper)]
                    p-8
                    md:flex
                    md:gap-10
                    "
                >

                    <div className="mx-auto mb-8 w-fit md:mx-0 md:mb-0">

                        <Image
                            src="https://losvwqdyeshnyfxyxwuk.supabase.co/storage/v1/object/public/assets/editor/neelam-jain.jpeg"
                            alt="डॉ. नीलम जैन"
                            width={300}
                            height={400}
                            className="
    object-cover
    "
                        />

                    </div>


                    <div
                        className="
                        font-[var(--font-hindi)]
                        text-lg
                        leading-[2.1]
                        "
                    >

                        <h3
                            className="
                            mb-4
                            text-3xl
                            font-semibold
                            "
                        >
                            डॉ. नीलम जैन
                        </h3>


                        <p>
                            शिक्षा: एम.ए., पीएच.डी.
                        </p>

                        <p className="mt-5">
                            डॉ. नीलम जैन श्री देशना मासिक पत्रिका की
                            मुख्य संपादक हैं। वे हिंदी साहित्य, जैन दर्शन,
                            संस्कृति और सामाजिक चिंतन के क्षेत्र में
                            सक्रिय योगदान देती रही हैं।
                        </p>

                        <p className="mt-5">
                            वे साहित्य भारती शोध संस्थान में शोध अधिकारी,
                            सेवायतन श्री सम्मेदशिखर जी की महासचिव तथा
                            VAMA जैन महिला मंडल, गुरुग्राम की संस्थापक रही हैं।
                        </p>

                        <p className="mt-5">
                            उन्होंने भारत सहित विश्व के अनेक मंचों पर
                            व्याख्यान दिए हैं और जैन दर्शन एवं भारतीय
                            संस्कृति के विचारों को प्रसारित किया है।
                        </p>

                    </div>

                </div>

            </section>

            <section className="mt-20">

                <div
                    className="
        border
        border-[var(--border)]
        bg-[var(--paper)]
        p-8
        font-[var(--font-hindi)]
        text-lg
        leading-[2.1]
        "
                >

                    <h2
                        className="
            mb-8
            text-3xl
            font-semibold
            "
                    >
                        प्रकाशित कार्य एवं सम्मान
                    </h2>


                    <p className="mb-6">
                        डॉ. नीलम जैन ने हिंदी साहित्य, जैन दर्शन,
                        संस्कृति एवं सामाजिक चिंतन के क्षेत्र में
                        अनेक पुस्तकों का लेखन एवं संपादन किया है।
                        उनकी रचनाएँ साहित्य और समाज के विभिन्न
                        पहलुओं को समर्पित हैं।
                    </p>


                    <h3
                        className="
            mb-4
            text-2xl
            font-semibold
            "
                    >
                        प्रमुख प्रकाशित कृतियाँ
                    </h3>


                    <ul className="mb-8 list-disc space-y-2 pl-6">

                        <li>सराक क्षेत्र</li>
                        <li>मौन में बंद अस्मिता</li>
                        <li>समाज निर्माण में महिलाओं का योगदान</li>
                        <li>मन में धरो णमोकार</li>
                        <li>माटी का सौरभ</li>
                        <li>णमोकार (नेत्रहीनों के लिए ब्रेल भाषा में)</li>
                        <li>धूम्रपान – ज़हर ही ज़हर</li>
                        <li>सभ्यता के उन्नायक भगवान ऋषभदेव</li>
                        <li>मिले सुर मेरा तुम्हारा</li>
                        <li>दिसंबर के दिगंबर</li>
                        <li>जैन वार्ता</li>
                        <li>तत्वार्थ सूत्र : एक सामाजिक अध्ययन</li>
                        <li>जैन लोकसाहित्य में नारी</li>
                        <li>Jain Religion and Science</li>
                        <li>प्राकृत भाषा में रामकथा</li>

                    </ul>


                    <h3
                        className="
    mb-4
    text-2xl
    font-semibold
    "
                    >
                        प्रमुख सम्मान एवं पुरस्कार
                    </h3>


                    <ul
                        className="
    list-disc
    space-y-2
    pl-6
    "
                    >

                        <li>George Bernard Shaw Memorial Honour (1994)</li>
                        <li>Dr. Laxmi Narain Award (1994)</li>
                        <li>Chandmal Saraogi Gauhati Award (1994)</li>
                        <li>Shrut Shri Award (1995)</li>
                        <li>Acharya Vidya Sagar Award (1995)</li>
                        <li>Mahavir Award (1995)</li>
                        <li>Dr. Ambedkar Fellowship (1996)</li>
                        <li>Sahitya-Shri (1997)</li>
                        <li>Special Writer & Social Worker Award (1997)</li>
                        <li>Sarjan Award (1997)</li>
                        <li>Sahitya-Saraswati (1998)</li>
                        <li>Sahitya Shiromani (1999)</li>
                        <li>Saraswat Samman (1999)</li>
                        <li>Sahu Ramadevi Award (1999)</li>
                        <li>Jain Jyotsana (2000)</li>
                        <li>Mahila-Ratna (2001)</li>
                        <li>Shrawika Ratan Samman (2001)</li>
                        <li>Mahila-Gaurav (2003)</li>
                        <li>Guru-Ashish Samman (2005)</li>
                        <li>Maa-Jinvani Award (2009)</li>
                        <li>Vishva Maitri Samman (2009)</li>
                        <li>Saraswat Samman (2012)</li>
                        <li>Aksharabhindan Samman (2012)</li>
                        <li>Stri Shakti Samman (2015)</li>
                        <li>Swayambhu Puraskar (2016)</li>
                        <li>Naari Ratan (2023)</li>
                        <li>Girnar Gaurav Award (2022)</li>
                        <li>Acharya Shantisagar Award (2022)</li>

                    </ul>

                </div>

            </section>


        </main>
    );
}