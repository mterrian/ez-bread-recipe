// components/Header.tsx
import Link from "next/link";

interface HeaderProps {
  subtitle?: string;
}

export default function Header({
  subtitle = "Simple Loaves For Complicated Times",
}: HeaderProps) {
  return (
    <header className="w-full bg-[var(--header)] border-b-4 border-[var(--accent)] mb-8">
      <div className="w-full max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-center sm:text-left">
            <Link href={"/"} className="hover:opacity-80 transition-opacity">
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--background)] mb-1">
                EZ Bread Recipe
              </h1>
            </Link>
            {subtitle && (
              <p className="text-sm sm:text-base text-[var(--background)] opacity-90 italic">
                {subtitle}
              </p>
            )}
          </div>
          <nav className="flex items-center justify-center gap-6">
            <Link
              href="/"
              className="text-[var(--background)] hover:text-[var(--accent)] transition-colors font-semibold text-sm sm:text-base"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[var(--background)] hover:text-[var(--accent)] transition-colors font-semibold text-sm sm:text-base"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
