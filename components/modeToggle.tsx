import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <button
        className="cursor-pointer"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <Icon
            icon={"heroicons-outline:sun"}
            className="w-6 h-6 text-zinc-800"
          />
        ) : (
          <Icon
            icon={"heroicons-outline:moon"}
            className="w-6 h-6 text-yellow-300"
          />
        )}
      </button>
    </div>
  );
}
