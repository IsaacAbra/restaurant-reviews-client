'use strict'

const store = require('./../store')
const config = require('./../config')

const createRestaurant = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/create-restaurant',
    data: {
      restaurant: {
        name: formData.restaurants.name,
        cuisine: formData.restaurants.cuisine,
        location: formData.restaurants.location,
        review: formData.restaurants.review,
        rating: formData.restaurants.rating
      }
    }
  })
}

const restaurantIndex = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/restaurant-index',
    data: {
      restaurant: {
        name: formData.restaurants.name,
        cuisine: formData.restaurants.cuisine,
        location: formData.restaurants.location,
        review: formData.restaurants.review,
        rating: formData.restaurants.rating
      }
    }
  })
}

const deleteRestaurant = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/delete-restaurant',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createRestaurant,
  restaurantIndex,
  deleteRestaurant
}
