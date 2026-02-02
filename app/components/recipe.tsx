import Link from "next/link";

interface RecipeProps {
  recipe: {
    id: string;
    title: string;
    ingredientsList: string[];
    description: string;
    recipeSteps: string[];
    categories: string[];
    prepTime: number;
    cookTime: number;
    servings: number;
    difficulty: "Easy" | "Medium" | "Hard";
  };
}

export default function Recipe({ recipe }: RecipeProps) {
  const {
    ingredientsList,
    recipeSteps,
    description,
    categories,
    prepTime,
    cookTime,
    servings,
    difficulty,
  } = recipe;

  return (
    <div>
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold hover:text-[var(--accent)] transition-colors mb-6"
      >
        <span>←</span>
        <span>Back to Recipes</span>
      </Link>

      {/* Description and Metadata */}
      <div className="card p-6 mb-6">
        <p className="text-lg mb-4">{description}</p>

        {/* Metadata */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-2">
            <span>⏱</span>
            <span>Prep: {prepTime} min</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🔥</span>
            <span>Cook: {cookTime} min</span>
          </div>
          <div className="flex items-center gap-2">
            <span>👤</span>
            <span>Serves: {servings}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📊</span>
            <span>Difficulty: {difficulty}</span>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[var(--accent)] text-white text-sm rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Ingredients - Left column, sticky on desktop */}
        <div className="lg:col-span-1">
          <div className="card p-6 lg:sticky lg:top-4">
            <h2 className="text-2xl font-semibold font-mono mb-4">
              Ingredients
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {ingredientsList.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Steps - Right column */}
        <div className="lg:col-span-2">
          <div className="card p-6">
            <h2 className="text-2xl font-semibold font-mono mb-4">
              Instructions
            </h2>
            <ol className="space-y-4">
              {recipeSteps.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="font-semibold font-mono text-[var(--accent)] min-w-[2rem]">
                    {index + 1}.
                  </span>
                  <span className="flex-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
