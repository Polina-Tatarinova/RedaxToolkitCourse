import styles from "./RecipeItem.module.css";
import { useActions } from "../hooks/useActions";
import { useFavorites } from "../hooks/useFavorites";

function RecipeItem({ recipe }) {
  const { favorites } = useFavorites();
  const { toggleFavorites } = useActions();

  const isFavorite = favorites.some((fav) => fav.id === recipe.id);

  return (
    <div className={styles.item}>
      <span>{favorites.length}</span>
      <h2>{recipe.name}</h2>
      <button onClick={() => toggleFavorites(recipe)}>
        {isFavorite ? "Remove from " : "Add to "}favorites
      </button>
    </div>
  );
}

export default RecipeItem;
