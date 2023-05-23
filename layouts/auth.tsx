export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-white dark:bg-black dark:text-white">
      {children}
    </div>
  );
}
