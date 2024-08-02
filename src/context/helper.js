import { SELECT_ITEM } from "../general/utils"

export const reducer = (state, action) => {
  switch (action.type) {
    case SELECT_ITEM:
      return { ...state, selectedItemKey: action.payload }
    default:
      return state
  }
}
