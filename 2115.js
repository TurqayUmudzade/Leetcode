// var findAllRecipes = function (recipes, ingredients, supplies) {
//     const setOfIngredients = new Set(supplies);
//     const recipesWithIngredients = new Map();
//     const progress = new Map();
//     //map recipes to it's ingredients and set each recipe to false in another map called progress
//     for (let i = 0; i < recipes.length; i++) {
//         recipesWithIngredients.set(recipes[i], ingredients[i]);
//         progress.set(recipes[i], false)
//     }

//     const result = [];

//     for (const rec of recipes) {
//         if (recurse(rec, recipesWithIngredients, setOfIngredients, progress)) {
//             result.push(rec);
//             setOfIngredients.add(rec);
//         }
//     }

//     return result;
// };

// function recurse(rec, recipesWithIngredients, setOfIngredients, progress) {
//     const currentIngredients = recipesWithIngredients.get(rec);
//     for (const ingredient of currentIngredients) {
//         if (setOfIngredients.has(rec)) continue;
//         if (setOfIngredients.has(ingredient)) continue;

//         else if (recipesWithIngredients.has(ingredient)) {
//             if (progress.get(ingredient)) return false;
//             progress.set(ingredient, true);
//             let hasCycle = recurse(ingredient, recipesWithIngredients, setOfIngredients, progress);
//             if (!hasCycle) return false;
//             setOfIngredients.add(ingredient);
//         } else {
//             return false;
//         }
//     }
//     return true;
// }

var findAllRecipes = function (recipes, ingredients, supplies) {
    const adjList = new Map()
    const visited = new Set();
    supplies = new Set(supplies)

    for (let i = 0; i < recipes.length; i++) {
        const ingArr = ingredients[i], recipe = recipes[i], prereq = [];
        for (let ing of ingArr) if (!supplies.has(ing)) prereq.push(ing);
        adjList.set(recipe, prereq);
    }

    console.log(adjList);

    function dfs(recipe) {
        if (!adjList.get(recipe)) return false;
        if (adjList.get(recipe).length === 0) return true;
        if (visited.has(recipe)) return false;

        visited.add(recipe);
        const prereq = adjList.get(recipe);

        for (let j = 0; j < prereq.length; j++) {
            if (!dfs(prereq[j])) return false;
        }

        adjList.set(recipe, []);
        return true;
    }
    const res = [];
    for (let i = 0; i < recipes.length; i++) {
        if (dfs(recipes[i])) res.push(recipes[i]);
    }
    return res;
};

let recipes = ["bread", "sandwich", "burger"],
    ingredients = [["yeast", "flour"], ["bread", "meat"], ["sandwich", "meat", "bread"]],
    supplies = ["yeast", "flour", "meat"]



console.log(findAllRecipes(recipes, ingredients, supplies));