// Recipe type definition - making it easy to migrate to a database later
export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredientsList: string[];
  recipeSteps: string[];
  categories: string[];
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  image?: string; // optional, path to image
}

export const recipes: Recipe[] = [
  {
    id: "dutch-oven-bread",
    title: "Dutch Oven Bread",
    description:
      "A simple, no-knead crusty artisan bread baked in a dutch oven. Perfect golden crust with a soft, airy interior.",
    ingredientsList: [
      "3 cups (450g) flour, bread or all-purpose",
      "2 tsp instant or rapid rise yeast",
      "2 tsp cooking/kosher salt (NOT table salt)",
      "1 1/2 cups (375ml) very warm tap water (up to 55°C/130°F)",
    ],
    recipeSteps: [
      "Mix flour, yeast and salt in a large bowl. Add water, then use the handle of a wooden spoon to mix until all the flour is incorporated. Dough will be wet and sloppy.",
      "Cover with cling wrap or plate, leave on counter for 2-3 hours until it doubles in volume, it's wobbly like jelly and the top is bubbly.",
      "Optional: At this stage, you can refrigerate for up to 3 days for better flavor. If refrigerated, leave bowl on counter for 45-60 minutes before baking.",
      "Preheat oven to 230°C/450°F (220° fan) with dutch oven (26cm/10\" or larger) inside with lid on, 30 minutes prior to baking.",
      "Sprinkle work surface with 1 tbsp flour, scrape dough out of bowl. Sprinkle top with 1/2 tbsp flour. Using a dough scraper, fold the sides inwards (about 6 folds) to form a roundish shape.",
      "Slide a large piece of parchment/baking paper next to the dough, then flip the dough upside down onto the paper (seam side down). Reshape it into a round shape.",
      "Remove piping hot dutch oven from oven. Use paper to place dough into pot, place lid on.",
      "Bake 30 minutes covered, then 12 minutes uncovered or until deep golden and crispy.",
      "Cool on rack for 10 minutes before slicing.",
    ],
    categories: ["Easy", "Same Day", "Dutch Oven"],
    prepTime: 15,
    cookTime: 42,
    servings: 8,
    difficulty: "Easy",
    image: "https://i.imgur.com/QIrZWGIs.jpg",
  },
  {
    id: "ciabatta",
    title: "Ciabatta",
    description:
      "Classic Italian bread with a crispy crust and open, airy crumb. Perfect for sandwiches or dipping in olive oil.",
    ingredientsList: [
      "2 cups (250g) all-purpose flour",
      "1 teaspoon (6g) kosher salt",
      "1/4 cup (59.15g) warm water (around 105°F)",
      "1 teaspoon (12g) active dry yeast (approx. half a packet)",
      "3/4 cup (177.44g) cool water",
    ],
    recipeSteps: [
      "Place the flour and salt in a large mixing bowl, and whisk to combine.",
      "Sprinkle the yeast over the warm water and stir to combine.",
      "When the yeast mixture looks foamy (after about 5 minutes) stir it into the flour mixture (it will be very dry).",
      "Add the cool water, a little at a time, stirring after each addition. Once all the water has gone in, the dough will be very wet and sticky.",
      "Cover with plastic wrap and allow the dough to rest at room temperature for 30 minutes.",
      "Fold the dough over on itself: top to bottom, bottom to top, left to right, then right to left.",
      "Cover and rest for 1 hour, then repeat the folding process one more time.",
      "Cover and rest for 1 more hour.",
      "Scrape the dough onto a parchment-lined baking sheet, and pat it into a rectangular shape (for a loaf), or divide it into 6 equal portions and shape each into a small square or rectangle (for rolls).",
      "Cover lightly with oiled plastic wrap and allow to rise at room temperature for 30 to 45 minutes, or in the refrigerator overnight.",
      "Preheat the oven to 475°F and place an empty oven-safe dish on the bottom rack.",
      "Mist the unbaked bread with water and place it in the center rack of the oven.",
      "Pour about 2 cups of water into the empty dish and bake until the bread is brown & crusty, makes a hollow sound when tapped, and registers an internal temperature of 190°F (approx. 35 to 45 minutes).",
    ],
    categories: ["Medium", "Italian", "Sandwichable"],
    prepTime: 20,
    cookTime: 40,
    servings: 6,
    difficulty: "Medium",
    image: "https://i.imgur.com/QIrZWGIs.jpg",
  },
  {
    id: "focaccia",
    title: "Focaccia",
    description:
      "Olive oil-rich Italian flatbread with a crispy bottom and fluffy interior. Topped with rosemary and flaky sea salt.",
    ingredientsList: [
      "4 cups (512g) all-purpose flour or bread flour",
      "2 to 3 teaspoons (10 to 15g) kosher salt",
      "2 teaspoons (8g) instant yeast",
      "2 cups (455g) lukewarm water, made by combining 1/2 cup boiling water with 1 1/2 cups cold water",
      "Butter for greasing",
      "4 tablespoons olive oil, divided",
      "Flaky sea salt, such as Maldon",
      "1 to 2 teaspoons whole rosemary leaves (optional)",
    ],
    recipeSteps: [
      "In a large bowl, whisk together the flour, salt, and instant yeast. Add the water. Using a rubber spatula, mix until the liquid is absorbed and the ingredients form a sticky dough ball.",
      "Rub the surface of the dough lightly with olive oil. Cover the bowl with a damp tea towel, cloth bowl cover, or plastic wrap and place in the refrigerator immediately for at least 12 hours or for as long as three days.",
      "Line two 8- or 9-inch pie plates or a 9×13-inch pan with parchment paper or grease with butter or coat with nonstick cooking spray.",
      "Pour a tablespoon of oil into the center of each pan or 2 tablespoons of oil if using the 9×13-inch pan.",
      "Using two forks, deflate the dough by releasing it from the sides of the bowl and pulling it toward the center. Rotate the bowl in quarter turns as you deflate, turning the mass into a rough ball.",
      "Use the forks to split the dough into two equal pieces (or do not split if using the 9×13-inch pan). Place one piece into one of the prepared pans. Roll the dough ball in the oil to coat it all over. Repeat with the remaining piece.",
      "Let the dough balls rest for 3 to 4 hours depending on the temperature of your kitchen.",
      "Set a rack in the middle of the oven and preheat it to 425°F. If using the rosemary, sprinkle it over the dough.",
      "Pour a tablespoon of oil over each round of dough (or two tablespoons if using a 9×13-inch pan). Rub your hands lightly in the oil to coat, then, using all of your fingers, press straight down to create deep dimples.",
      "If necessary, gently stretch the dough as you dimple to allow the dough to fill the pan. Sprinkle with flaky sea salt all over.",
      "Transfer the pans to the oven and bake for 25 to 30 minutes, until the underside is golden and crisp.",
      "Remove from the oven and transfer the focaccia to a cooling rack. Let it cool for 10 minutes before cutting and serving.",
    ],
    categories: ["Easy", "Italian", "Flatbread", "Overnight"],
    prepTime: 20,
    cookTime: 28,
    servings: 10,
    difficulty: "Easy",
    image: "https://i.imgur.com/QIrZWGIs.jpg",
  },
  {
    id: "pancakes",
    title: "Small Batch Pancakes",
    description:
      "Fluffy buttermilk pancakes made in a small batch, perfect for 2-3 people. Quick and easy breakfast.",
    ingredientsList: [
      "1 egg",
      "1 cup buttermilk",
      "3 tablespoons canola oil",
      "1 cup all-purpose flour",
      "1 1/2 teaspoons baking powder",
      "1/2 teaspoon baking soda",
      "1/2 teaspoon salt",
      "1/2 tablespoon sugar",
    ],
    recipeSteps: [
      "Combine wet ingredients (egg, buttermilk, and canola oil) in a bowl.",
      "In a separate bowl, combine dry ingredients (flour, baking powder, baking soda, salt, and sugar).",
      "Mix wet and dry ingredients together, leaving some lumps in the batter (this is good!).",
      "Let the batter rest for 10 minutes while the pan heats up on medium-high heat.",
      "Pour batter onto the heated pan and cook until bubbles form on the surface, then flip.",
      "Cook until golden brown on both sides. Serve warm.",
    ],
    categories: ["Easy", "Quick", "Breakfast"],
    prepTime: 5,
    cookTime: 10,
    servings: 3,
    difficulty: "Easy",
    image: "https://i.imgur.com/QIrZWGIs.jpg",
  },
];
