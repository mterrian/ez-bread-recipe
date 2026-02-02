// components/Header.tsx
import Link from "next/link";

interface HeaderProps {
  subtitle?: string;
}

export default function Header({
  subtitle = "Simple Loaves For Complicated Times",
}: HeaderProps) {
  return (
    <header className="mb-8 w-full py-4 bg-[linear-gradient(to_bottom,var(--header)_90%,var(--background)_100%)]">
      <div className="w-full max-w-6xl mx-auto px-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-center sm:text-left">
            <Link href={"/"}>
              <h1 className="text-3xl sm:text-4xl font-mono">EZ Bread Recipe</h1>
            </Link>
            {subtitle && (
              <p className="mt-1">{subtitle}</p>
            )}
          </div>
          <nav className="flex items-center justify-center gap-6 text-sm sm:text-base">
            <Link href="/" className="hover:text-[var(--accent)] transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-[var(--accent)] transition-colors">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}