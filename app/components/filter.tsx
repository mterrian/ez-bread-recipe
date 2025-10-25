"use client";

import { useRef, useState, useEffect } from "react";

interface FilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Filter({ 
  categories, 
  selectedCategory, 
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (panelRef.current) {
      setMaxHeight(isOpen ? `${panelRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen, searchQuery, selectedCategory]);

  return (
    <div className="mb-6 w-full">
        <div
        className="flex items-center justify-start cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-font-mono text-lg">Search Recipes</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div
        ref={panelRef}
        style={{ maxHeight }}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:justify-start gap-4">
          {/* Category Buttons */}
          <div className="flex flex-wrap gap-2">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-yellow-400 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-yellow-200 dark:hover:bg-yellow-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search By Name"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-800 dark:text-white"
          />
        </div>
      </div>
    </div>
  )
}