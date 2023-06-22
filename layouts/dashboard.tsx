import { useEffect } from "react";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  });

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black dark:text-white">
      <div className="max-w-screen-2xl min-h-screen mx-auto bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <Navigation />

          {children}
        </div>

        <Footer />
      </div>
    </div>
  );
}
