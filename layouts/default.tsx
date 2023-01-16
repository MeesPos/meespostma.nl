import Head from "next/head";
import ContactSection from "../components/contact";
import Footer from "../components/footer";
import Navigation from "../components/navigation";

export default function DefaultLayout({
  description,
  title,
  og_type,
  image,
  url,
  children,
}: {
  description: string;
  title: string;
  og_type: string;
  image: string;
  url: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />

        <meta name="robots" content="index, follow" />

        <meta property="og:type" content={og_type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Mees Postma" />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="MeesPos" />
        <meta name="twitter:creator" content="MeesPos" />
      </Head>

      <div className="min-h-screen bg-zinc-50 dark:bg-black dark:text-white">
        <div className="max-w-screen-2xl min-h-screen mx-auto bg-white dark:bg-zinc-900">
          <div className="max-w-7xl mx-auto">
            <Navigation />

            {children}
          </div>

          <ContactSection />

          <Footer />
        </div>
      </div>
    </div>
  );
}
