import { atom } from "recoil";
import { Recipe } from "./Fn/Interface/Recipe";

const Recipes = atom<Recipe[]>({
    key: "recipes",
    default: []
});

export {Recipes}