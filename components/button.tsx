export default function Button({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={
        "inline-flex items-center rounded-md border border-transparent bg-zinc-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-zinc-100" +
        className
      }
    >
      {title}
    </button>
  );
}
