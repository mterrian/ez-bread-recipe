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
            />
          ))}
      </main>
    </div>
  </div>


  );
}
