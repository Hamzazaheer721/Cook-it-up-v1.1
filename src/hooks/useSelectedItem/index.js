import { useContext } from "react"
import { SelectedItemContext } from "../../context/selectedItem.context"

export const useSelectedItem = () => {
  const context = useContext(SelectedItemContext)
  if (!context) {
    throw new Error(
      "useSelectedItem must be used within a SelectedItemProvider"
    )
  }
  return context
}
