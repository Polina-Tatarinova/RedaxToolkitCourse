import RecipeItem from "./recipe-item/RecipeItem";

function App() {
  return (
    <div>
      <RecipeItem
        recipe={{
          id: 1,
          name: "Сибас запечённый с овощами гриль",
        }}
      />

      <RecipeItem
        recipe={{
          id: 2,
          name: "Пачта с белыми грибами и трюфелем",
        }}
      />

      <RecipeItem
        recipe={{
          id: 3,
          name: "Форель на гриле с запечёными овощами",
        }}
      />

      <RecipeItem
        recipe={{
          id: 4,
          name: "Медальёны из говяжей вырезки",
        }}
      />

      <RecipeItem
        recipe={{
          id: 5,
          name: "Капрезе",
        }}
      />
    </div>
  );
}

export default App;
