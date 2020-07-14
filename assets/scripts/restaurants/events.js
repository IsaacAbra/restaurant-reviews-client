'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onCreateRestaurant = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.createRestaurant(data)
    .then(ui.createRestaurantSuccess)
    .catch(ui.createRestaurantFailure)
}

const onRestaurantIndex = function (event) {
  api.restaurantIndex()
    .then(ui.restaurantIndexSuccess)
    .catch(ui.restaurantIndexFailure)
}

const onDeleteRestaurant = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.restaurantIndex(data)
    .then(ui.onDeleteRestaurantIndexSuccess)
    .catch(ui.onDeleteRestaurantFailure)
}

module.exports = {
  onCreateRestaurant,
  onRestaurantIndex,
  onDeleteRestaurant
}
