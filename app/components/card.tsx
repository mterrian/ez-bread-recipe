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
    <div className="p-6 card w-full max-w-md transition-transform hover:-translate-y-1">
      <Link href={`/recipes/${id}`}>
        <Image
          src={image}
          width={width}
          height={height}
          alt="placeholder">
        </Image>
        <div className="p-4">
          <h2 className="text-xl font-semibold font-mono mb-2">{title}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">{description}</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-[var(--accent)] text-white text-xs rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}