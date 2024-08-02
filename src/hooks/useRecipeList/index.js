import { useMemo } from "react"
import recipes from "../../assets/data/recipe-list.json"

export const useRecipeList = () => useMemo(() => recipes, [])
