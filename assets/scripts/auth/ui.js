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
}

const signOutFailure = function (response) {
  $('form').trigger('reset')
  $('#message').text(`You haven't left. You're still logged in on our website.`)
}

module.exports =
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
