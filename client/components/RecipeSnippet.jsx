import React from 'react'

class RecipeSnippet extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        recipe:props.recipe
    }
  }


  render(){
    console.log('state: ', this.state);
    return (
      <div className="">
          <h2>{this.state.recipe.label}</h2>
          <img src={this.state.recipe.image}/>
      </div>
    )
  }
}

export default RecipeSnippet

