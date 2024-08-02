import React, { createContext, useReducer } from "react"

const initialState = { selectedItemKey: null }

const SELECT_ITEM = "SELECT_ITEM"

const reducer = (state, action) => {
  switch (action.type) {
    case SELECT_ITEM:
      return { ...state, selectedItemKey: action.payload }
    default:
      return state
  }
}

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
