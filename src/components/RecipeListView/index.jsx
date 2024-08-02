import { memo } from "react"
import "./index.styles.css"

import { useRecipeListView } from "./index.hook"

const RecipeListView = memo(() => {
  const { handleClick, recipes, state } = useRecipeListView()
  return (
    <div className='list_container'>
      <ol className='list'>
        {recipes?.map(({ recipeName, key }, idx) => {
          const cls = `list_item ${
            state?.selectedItemKey === key ? "active" : ""
          }`
          return (
            <li onClick={() => handleClick(key)} className={cls} key={idx}>
              {recipeName}
            </li>
          )
        })}
      </ol>
    </div>
  )
})

export default RecipeListView
