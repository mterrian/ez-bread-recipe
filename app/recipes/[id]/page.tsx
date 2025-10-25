import { recipes } from "../data"
import Recipe from '../../components/recipe';
import Header from "../../components/header";

interface RecipePageProps {
  params: { id: string };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params;
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="font-sans min-h-screen pb-8 sm:pb-20">
      <Header subtitle={recipe.title} />
      <main className="w-full max-w-6xl mx-auto px-2 mt-8">
        <Recipe recipe={recipe} />
      </main>
  </div>
  )
}