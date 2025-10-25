export default function Ingredients({ ingredients }: { ingredients: string[] }) {
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