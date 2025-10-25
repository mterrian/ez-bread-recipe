// components/Header.tsx
import Link from "next/link";

interface HeaderProps {
  subtitle?: string;
}

export default function Header({
  subtitle = "Simple Loaves For Complicated Times",
}: HeaderProps) {
  return (
    <header className="mb-8 w-full text-center sm:text-left py-4 bg-[linear-gradient(to_bottom,var(--header)_90%,var(--background)_100%)]">
      <div className="w-full max-w-6xl mx-auto px-2">
        <Link href={"/"}>
          <h1 className="text-3xl sm:text-4xl font-mono">EZ Bread Recipe</h1>
        </Link>
        {subtitle && (
          <p className="mt-1">{subtitle}</p>
        )}
      </div>
    </header>
  );
}