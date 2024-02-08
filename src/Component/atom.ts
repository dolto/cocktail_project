import { atom } from "recoil";
import { Recipe } from "./Fn/Interface/Recipe";
import ClassLocation from "./Fn/Interface/ClassLocation";
import StoreLocation from "./Fn/Interface/StoreLocation";

const Recipes = atom<[Recipe[],Recipe[]]>({
    key: "recipes",
    default: [[],[]]
});

const Stores = atom<StoreLocation[]>({
    key: "Stores",
    default: []
});

const Classs = atom<ClassLocation[]>({
    key: "Classs",
    default: []
});

const Keyword = atom<string[]>({
    key:"Keyword",
    default:[]
});

const SessionID = atom<string|null>({
    key: "SessionID",
    default: null
})

export { Recipes , Stores, Classs, Keyword, SessionID};