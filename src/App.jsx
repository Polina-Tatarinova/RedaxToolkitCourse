import CreateRecipe from "./create-recipe/CreateRecipe";
import RecipeItem from "./recipe-item/RecipeItem";
import { useGetRecipesQuery } from "./store/api/api";

function App() {
  const { data, isLoading, error } = useGetRecipesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <section>
      <CreateRecipe />
      <div>
        {data?.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}

export default App;
