import React,{useState, useEffect} from "react";
import Recipe from "./Recipe";

function RecipesList() {
    const [recipe,setRecipe] = useState([]);
    const url = "http://starlord.hackerearth.com/recipe";
    
    useEffect(() => {  
        fetch(url)
        .then(res => res.json())
        .then(data => setRecipe(data));  
    }, []);
    
    //console.log(recipe);
    const recipeComponents = recipe.map(item => <Recipe key={item.id} item={item} />);
    
    return (
        <div>
            {recipeComponents}
        </div>    
    );    
}

export default RecipesList;