import { useCallback } from "react"
import { useRecipeList, useSelectedItem } from "../../hooks"

export const useRecipeListView = () => {
  const recipes = useRecipeList()
  const { state, selectItem } = useSelectedItem()

  const handleClick = useCallback((key) => {
    selectItem(key)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    state,
    recipes,
    handleClick
  }
}
