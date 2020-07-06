'use strict'

const createRestaurantSuccess = function (reponse) {
  $('form').trigger('reset')
  $('#restaurant-message').text('Sign up was successful! You may sign in now.')
}

const createRestaurantFailure = function (reponse) {
  $('form').trigger('reset')
  $('#restaurant-message').text('Sign up failed :(')
}

const deleteRestaurantSuccess = function (response) {
  $('form').trigger('reset')
  $('#restaurant-message').text(`You've signed out. Are you already tired of us? :(`)
}

const deleteRestaurantFailure = function (response) {
  $('form').trigger('reset')
  $('#restaurant-message').text(`You haven't left. You're still logged in on our website.`)
}

module.exports = {
  createRestaurantSuccess,
  createRestaurantFailure,
  deleteRestaurantSuccess,
  deleteRestaurantFailure
}
