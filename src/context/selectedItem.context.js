import React, { createContext, useReducer } from "react"
import { initialContextState, SELECT_ITEM } from "../general/utils"
import { reducer } from "./helper"

export const initialState = initialContextState

export const SelectedItemContext = createContext()

export const SelectedItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const selectItem = (key) => {
    dispatch({ type: SELECT_ITEM, payload: key })
  }

  return (
    <SelectedItemContext.Provider value={{ state, selectItem }}>
      {children}
    </SelectedItemContext.Provider>
  )
}
