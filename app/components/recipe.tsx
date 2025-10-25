interface RecipeProps { 
  recipe: {
    id: string;
    title: string;
    ingredientsList: string[];
    description: string;
    recipeSteps: string[];
  }
}

function Ingredients({ ingredients }: { ingredients: string[] }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold font-mono mb-4">Ingredients</h2>
      <ul className="list-disc list-inside space-y-2">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700">
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Steps({ steps }: { steps: string[] }) {
  return (
    <div className="">
      <h2 className="text-xl font-semibold font-mono mb-4">Steps</h2>
      <ol className="list-decimal list-inside space-y-2">
        {steps.map((step, index) => (
          <li key={index} className="text-gray-700">
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Recipe({ recipe }: RecipeProps) {
  const { ingredientsList: ingredients, recipeSteps: steps } = recipe;
  return (
    <div className="p-6 font-sans card">
      <Ingredients ingredients={ingredients} />
      <Steps steps={steps}/>
    </div>
  )
}