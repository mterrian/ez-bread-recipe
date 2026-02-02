"use client";

import { useState } from "react";
import Card from "./components/card";
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
    <div className="min-h-screen pb-8 sm:pb-20 flex flex-col items-center">
      <Header />
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Simplified Hero */}
        <div className="text-center mb-6">
          <p className="text-lg sm:text-xl italic text-[var(--foreground)] opacity-80">
            No fluff. Just flour.
          </p>
        </div>

        {/* Category Filter as prominent buttons */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === "All"
                  ? "bg-[var(--accent)] text-white shadow-md"
                  : "bg-white border-2 border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)]"
              }`}
            >
              All Recipes
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-[var(--accent)] text-white shadow-md"
                    : "bg-white border-2 border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search moved to secondary position */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border-2 border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--accent)] bg-white"
            />
          </div>
        </div>

        {/* Recipe Grid */}
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
