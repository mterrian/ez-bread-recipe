export default function Steps({ steps }: { steps: string[] }) {
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