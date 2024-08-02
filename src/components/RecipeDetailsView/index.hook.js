import { useMemo } from "react"
import { useRecipeList, useSelectedItem } from "../../hooks"

export const useRecipeDetailsView = () => {
  const recipes = useRecipeList()
  const { state } = useSelectedItem()

  const selectedRecipe = useMemo(() => {
    const { selectedItemKey } = state

    if (!selectedItemKey) return null

    if (!recipes) return null

    return recipes?.find((recipe) => recipe?.key === selectedItemKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipes, state.selectedItemKey])

  return selectedRecipe
}
