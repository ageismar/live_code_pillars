const router = require('express').Router()

router.use('/pokemon', require('./pokemon'))

router.use('/trainer', require('./trainer'))

module.exports = router