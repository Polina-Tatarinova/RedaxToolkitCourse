import { useSelector } from "react-redux";
import styles from "./RecipeItem.module.css";
import { useActions } from "../hooks/useActions";

function RecipeItem({ recipe }) {
  const favorites = useSelector((state) => state.favorites);

const { toggleFavorites } = useActions()

  const isFavorite = favorites.some((fav) => fav.id === recipe.id);

  return (
    <div className={styles.item}>
      <h2>{recipe.name}</h2>
      <button onClick={() => (toggleFavorites(recipe))}>
        {isFavorite ? "Remove from " : "Add to "}favorites
      </button>
    </div>
  );
}

export default RecipeItem;
