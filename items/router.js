const router = require('express').Router()
const controller = require('./controller')
const methodNotAllowed = require('../errors/methodNotAllowed')

router.route('/')
    .post(controller.create)
    .get(controller.list)
    .all(methodNotAllowed)

router.route('/:id')
    .delete(controller.delete)
    .all(methodNotAllowed)

module.exports = router