'use strict'

const store = require('./../store')
const showRestaurantReview = require('./../templates/restaurantReviews.handlebars')

const createRestaurantSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('The genesis of your restaurant review was a success!')
}

const createRestaurantFailure = function (response) {
  $('form').trigger('reset')
  $('#message').text('There was an error adding that tasty place')
}

const deleteRestaurantSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text(`You've signed out. Are you already tired of us? :(`)
}

const deleteRestaurantFailure = function (response) {
  $('form').trigger('reset')
  $('#message').text(`You haven't left. You're still logged in on our website.`)
}

const restaurantIndexSuccess = (data) => {
  console.log(data)
  const showRestaurantReviewHtml = showRestaurantReview({restaurantReviews: data.restaurants})
  store.restaurants = data.restaurants
  $('.content').html(showRestaurantReviewHtml)
  $('#message').text('Here are your restaurant reviews! (If none are seen, just fill out the form)')
}

module.exports = {
  createRestaurantSuccess,
  createRestaurantFailure,
  deleteRestaurantSuccess,
  deleteRestaurantFailure,
  restaurantIndexSuccess
}
