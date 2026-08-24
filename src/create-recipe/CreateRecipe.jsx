import { useState } from "react";
import { useCreateRecipeMutation } from "../store/api/recipe.api";

const defaultValue = { name: "" };

export default function CreateRecipe() {
  const [recipe, setRecipe] = useState(defaultValue);
  const [createRecipe, { isLoading, error }] = useCreateRecipeMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    createRecipe(recipe)
      .unwrap()
      .then(() => {
        setRecipe(defaultValue);
      })
      .catch((err) => console.error("Ошибка создания:", err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Name"
            value={recipe.name}
            onChange={(e) =>
              setRecipe({
                ...recipe,
                name: e.target.value,
              })
            }
          />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Recipe"}
        </button>
      </form>
      {error && <div style={{ color: "red" }}>Error: {error.message}</div>}
    </div>
  );
}
