import { useMemo } from "react"
import recipes from "../../assets/data/recipe-list"

export const useRecipeList = () => useMemo(() => recipes, [])
