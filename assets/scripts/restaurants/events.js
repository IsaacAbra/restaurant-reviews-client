'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onCreateRestaurant = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.createRestaurant(formData)
    .then(ui.createRestaurantSuccess)
    .catch(ui.createRestaurantFailure)
}

const onRestaurantIndex = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.restaurantIndex(formData)
    .then(ui.onRestaurantIndexSuccess)
    .catch(ui.onRestaurantIndexFailure)
}

const onDeleteRestaurant = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.restaurantIndex(formData)
    .then(ui.onDeleteRestaurantIndexSuccess)
    .catch(ui.onDeleteRestaurantFailure)
}

module.exports = {
  onCreateRestaurant,
  onRestaurantIndex,
  onDeleteRestaurant
}
