import request from 'superagent'

const recipeUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'

//recipe

export function getRecipe (searchDetails, callback) {
  request.get(bookUrl + searchDetails)
    .end((err, res) => {
      callback(err, res.body)
    })
}


export function getData () {
 
  return request.get('/v1/getData')
    .then(res => {
      const data = res.body
      return data
    })
    .catch(() => {
      throw Error('You need to implement an API route for /v1/getData')
    })
}