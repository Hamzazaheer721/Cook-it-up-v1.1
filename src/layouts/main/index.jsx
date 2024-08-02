import { lazy, memo, Suspense } from "react"
import Loader from "../../components/Loader"
import "./index.styles.css"

const Components = {
  Header: lazy(() => import("../../components/Header")),
  RecipeDetailsView: lazy(() => import("../../components/RecipeDetailsView")),
  RecipeListView: lazy(() => import("../../components/RecipeListView"))
}

const Mainlayout = memo(() => {
  return (
    <div className='main_container'>
      <Suspense fallback={<Loader />}>
        <Components.Header />

        <div className='wrapper'>
          <Components.RecipeListView />
          <Components.RecipeDetailsView />
        </div>
      </Suspense>
    </div>
  )
})

export default Mainlayout
