import request from 'superagent'

// API KEYS and IDs

//Recipe Search API: 
const authID = '0e431408'  
const Key = '63d46ac9bcf18fc9551666a77f63168d'
const ingredient = 'chicken'
const health = 'kosher'

const exampleQuery = `https://api.edamam.com/search?q=${ingredient}&app_id=${authID}&app_key=${Key}&from=0&to=3&calories=591-722&health=${health}`



//Nutrition Analysis API: 
  // ID = 3c90696e  
  // Key = ac9f5d78a7e6ab1d3ba8334e55f1c89e

//Food Database API: 
  // ID = 369cdcf7  
  // Key = 280fe0ab6f50b696a147df597232f53b



const recipeUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'

//recipe

export function getRecipes (ingredient = 'chicken', callback) {
  const authID = '0e431408'  
  const Key = '63d46ac9bcf18fc9551666a77f63168d'
  const recipeUrl = `https://api.edamam.com/search?q=${ingredient}&app_id=${authID}&app_key=${Key}&from=0&to=10` 
  
  return request.get(recipeUrl)
    .end((err, res) => {
      callback(res.body.hits)
    })

}



export function addItem (itemName, userID) {
  return request.post('/v1/addItem')
    .send({name:itemName, user_id:userID})
    .then(res => {
      const returnedItem = res.body
      return returnedItem
    })
}


export function getItems (userID) {
  return request.get('/v1/getItems')
    .send(userID)
    .then(res => {
      const returnedItems = res.body
      return returnedItems
    })
}