'use strict'

const store = require('./../store')
const config = require('./../config')

const createRestaurant = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/restaurants',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

const restaurantIndex = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/restaurants',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteRestaurant = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/restaurants',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateRestaurant = (formData) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/travel/' + store.restaurantId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  createRestaurant,
  restaurantIndex,
  deleteRestaurant,
  updateRestaurant
}
