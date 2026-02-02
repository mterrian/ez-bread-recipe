"use client";

import { useState } from "react";
import Card from "./components/card";
import RecipeFilter from "./components/filter";
import Header from "./components/header";
import { recipes } from "./recipes/data";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = Array.from(
    new Set(recipes.flatMap((r) => r.categories))
  );

  const filteredRecipes = recipes.filter((r) => {
    const matchesCategory =
      selectedCategory === "All" ||
      r.categories.includes(selectedCategory);

    const matchesSearch = r.title.toLocaleLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch;
  });

  return (
  <div className="font-sans min-h-screen pb-8 sm:pb-20 flex flex-col items-center">
    <Header/>
    <div className="w-full max-w-6xl mx-auto px-2">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-mono mb-2">No fluff. Just flour.</h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
          Simple bread recipes without the life story.
        </p>
      </div>

      <RecipeFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 row-start-2 w-full max-w-6xl">
          {filteredRecipes.map((recipe) => (
            <Card
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              description={recipe.description}
              image="https://i.imgur.com/QIrZWGIs.jpg"
              width={400}
              height={300}
              categories={recipe.categories}
            />
          ))}
      </main>
    </div>
  </div>


  );
}
