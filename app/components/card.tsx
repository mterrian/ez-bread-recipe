import Image from "next/image";
import Link from "next/link";
import { recipes } from "../recipes/data";

interface CardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
  categories: string[];
}

export default function Card({ id, title, description, image, width, height, categories }: CardProps) {
  return (
    <Link href={`/recipes/${id}`}>
      <div className="card w-full transition-all hover:-translate-y-1 overflow-hidden h-full flex flex-col">
        <div className="relative h-48 overflow-hidden border-b-2 border-[var(--border)]">
          <Image
            src={image}
            width={width}
            height={height}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <h2 className="text-xl font-bold mb-2 text-[var(--foreground)]">
            {title}
          </h2>
          <p className="text-sm mb-3 flex-1 text-[var(--foreground)] opacity-80">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {categories.map((category, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[var(--accent)] text-white text-xs font-semibold rounded"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}