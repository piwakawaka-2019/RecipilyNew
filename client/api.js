import request from 'superagent'

const recipeUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'

//recipe

export function getRecipe (searchDetails, callback) {
  request.get(bookUrl + searchDetails)
    .end((err, res) => {
      callback(err, res.body)
    })
}
