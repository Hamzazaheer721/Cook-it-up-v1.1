import { SelectedItemProvider } from "../../context/selectedItem.context"

const Provider = ({ children }) => {
  return <SelectedItemProvider>{children}</SelectedItemProvider>
}

export default Provider
