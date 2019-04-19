import React from 'react'
import RecipeSnippet from './RecipeSnippet'


const NavLeft = (props) => {
  return (
    <div className="nav-left">
      {props.recipes.map((recipe) => {
          console.log('recipe.label: ', recipe.recipe.label);  
          return <RecipeSnippet key={recipe.label} recipe={recipe.recipe}/>
          
      })}
    </div>
  )
}


export default NavLeft

