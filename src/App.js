import { useState } from "react";
import "./App.css";
import Axios from "axios";
import RecipeTitle from "./recipe-title/RecipeTitle";

const YOUR_APP_ID = "fc4573d2";
const YOUR_APP_KEY = "c5ef39807170c949545244c55b80a427";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [healthLabel, setHealthLabel] = useState("vegetarian");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  const getRecipeInfo = async () => {
    let result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(recipes);
  };

  const onSubmit = e => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>
        <u> Food Recipe Hub</u>🤑
      </h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Type the Ingredient"
          className="app__input"
          onChange={e => {
            setQuery(e.target.value);
          }}
          value={query}
        />
        <select className="app__healthLabels">
          <option value="vegan" onClick={() => setHealthLabel("vegetarian")}>
            vegan
          </option>
          <option
            value="vegetarian"
            onClick={() => setHealthLabel("vegetarian")}
          >
            vegetarian
          </option>
          <option value="low-sugar" onClick={() => setHealthLabel("low-sugar")}>
            low-sugar
          </option>
          <option
            value="dairy-free"
            onClick={() => setHealthLabel("dairy-free")}
          >
            dairy-free
          </option>
          <option
            value="immuno-supportive"
            onClick={() => setHealthLabel("immuno-supportive")}
          >
            immuno-supportive
          </option>
          <option
            value=" wheat-free"
            onClick={() => setHealthLabel(" wheat-free")}
          >
            wheat-free
          </option>
        </select>
        <input type="submit" className="app__submit" value="Get Recipe" />
      </form>
      <div className="app__recipes">
        {recipes.map(recipe => {
          return <RecipeTitle recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
