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
}

export default function Card({ id, title, description, image, width, height }: CardProps) {
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
          <p className="text-gray-700">{description}</p>
        </div>
      </Link>
    </div>
  );
}