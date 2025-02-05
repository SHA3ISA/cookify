import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Recipie {
  name: string;
  ingredients: string;
  instructions: string;
//   imageUrl: string;
}

const ChefPage: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipie>({
    name: "",
    ingredients: "",
    instructions: "",
    // imageUrl: "",
  });

  const { userID } = useParams<{ userID: string }>()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        // setRecipe({name:recipe.name,ingredients:in,instructions:recipe.instructions})
      await axios.post(`http://localhost:8080/api/v1/${userID}/recipe`, recipe);
      alert("Recipe added successfully!");
      setRecipe({ name: "", ingredients:"", instructions: ""});
    } catch (error) {
      console.error("Error adding recipe:", error);
      alert("Failed to add recipe.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="name">Recipe Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={recipe.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="ingredients">Ingredients</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows={4}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows={4}
          required
        ></textarea>
      </div>
      {/* <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={recipe.imageUrl}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div> */}
      <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
        Add Recipe
      </button>
    </form>
  );
};

export default ChefPage;
