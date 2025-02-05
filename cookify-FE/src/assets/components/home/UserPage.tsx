import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Recipe {
    chefID:string
  recipieID: number;
//   imgaeBytes;
 ingredients:string;
   instrustion:string;
   name : string
}

const UserPage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const { userID } = useParams<{ userID: string }>()
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get<Recipe[]>(`http://localhost:8080/api/v1/${userID}/recipe`);
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {recipes.map((recipe) => (
        <div key={recipe.recipieID} className="rounded-2xl shadow-lg overflow-hidden">
            <h3>By :{recipe.chefID}</h3>
          <img
            src={"https://th.bing.com/th/id/OIP.9UFR5koGNJIN45SwLZdwJQHaFM?rs=1&pid=ImgDetMain"}
            alt={recipe.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
            <p className="text-gray-600 text-sm">{recipe.instrustion}</p>
          </div>
          <div className="p-4">
            
                <li>{recipe.ingredients}</li>
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserPage;
