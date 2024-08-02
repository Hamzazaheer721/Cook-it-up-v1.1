import { memo, useMemo } from "react"
import "./index.styles.css"
import { useRecipeDetailsView } from "./index.hook"
import defaultImage from "../../assets/images/biryani.jpg"

const RecipeDetailsView = memo(() => {
  const selectedRecipe = useRecipeDetailsView()
  console.info({ selectedRecipe })

  const Img = useMemo(() => {
    let imagePath
    const imgName = selectedRecipe?.image

    try {
      imagePath = require(`../../assets/images/${imgName}.jpg`)
    } catch (error) {
      console.warn(`Image ${imgName} not found, using default image.`)
      imagePath = defaultImage
    }

    return imagePath
  }, [selectedRecipe])

  const card = (
    <div className='card_container'>
      <h3 className='heading'>{selectedRecipe?.recipeName}</h3>
      <img
        className='recipe_img'
        src={Img}
        alt={selectedRecipe?.image}
        loading='lazy'
      />
      <div className='mini_details_container'>
        <h4 className='secondary_heading'>Details</h4>
        <div className='details_section'>
          <h4 className='details_heading'>Author: </h4>
          <p className='details_content'> {selectedRecipe?.author}</p>
        </div>

        <div className='details_section'>
          <h4 className='details_heading'>Ingredients: </h4>
          <p className='details_content'> {selectedRecipe?.ingredients}</p>
        </div>
      </div>

      <h4 className='secondary_heading'>Description</h4>
      <p
        className='description'
        dangerouslySetInnerHTML={{ __html: selectedRecipe?.description }}
      />
    </div>
  )

  const selectCardView = (
    <div className='default_container'>Select any dish now to see recipe!</div>
  )

  const layoutView = !!selectedRecipe ? card : selectCardView

  return <div className='details_container'>{layoutView}</div>
})

export default RecipeDetailsView
