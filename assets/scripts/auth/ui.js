'use strict'

const store = require('./../store')

const signUpSuccess = function (reponse) {
  $('form').trigger('reset')
  $('#message').text('Sign up was successful! You may sign in now.')
}

const signUpFailure = function (reponse) {
  $('form').trigger('reset')
  $('#message').text('Sign up failed :(')
}

const signInSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('You are in! Feel free to add whatever restaurant reviews you want.')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#shadow-me-plz').show()
  $('#post-restaurant-review').show()
  $('#view-restaurant-reviews-btn').show()
  store.user = response.user
}

const signInFailure = function (response) {
  $('form').trigger('reset')
  $('#message').text('Hehe, nice try. Go take a look at your account/password and try again.')
}

const changePasswordSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Your password has successfully been changed.')
}

const changePasswordFailure = function (response) {
  $('form').trigger('reset')
  $('#message').text(`Your password didn't change.`)
}

const signOutSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text(`You've signed out. Are you already tired of us? :(`)
  $('#sign-in').show()
  $('#sign-up').show()
  $('#post-restaurant-review').hide()
  $('#view-restaurant-reviews-btn').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#shadow-me-plz').hide()
}

const signOutFailure = function (response) {
  $('form').trigger('reset')
  $('#message').text(`You haven't left. You're still logged in on our website.`)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
