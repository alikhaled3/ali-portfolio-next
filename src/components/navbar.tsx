"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-lg border-b z-50 px-6 py-4 flex items-center justify-between">
      <Link href="/">
        <h1 className="font-bold text-lg">Ali Khaled</h1>
      </Link>

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2 rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        {mounted ? (theme === "light" ? <Moon size={20} /> : <Sun size={20} />) : null}
      </button>
    </nav>
  );
}
