import Navigation from "../components/navigation";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black dark:text-white">
      <div className="max-w-screen-2xl min-h-screen mx-auto bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <Navigation />

          {children}
        </div>

        {/* <ContactSection /> */}

        {/* <Footer /> */}
      </div>
    </div>
  );
}
