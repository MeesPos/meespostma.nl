export default function Button({
  title,
  className,
  type,
}: {
  title: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}) {
  return (
    <button
      type={type ?? "button"}
      className={`${className} inline-flex items-center rounded-md border border-transparent bg-zinc-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-zinc-100`}
    >
      {title}
    </button>
  );
}
