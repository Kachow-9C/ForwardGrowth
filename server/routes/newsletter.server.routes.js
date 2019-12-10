const newsletters = require('../controllers/newsletter.server.controller.js'),
    express = require('express'), 
    router = express.Router()

let newletterSchema = require('../models/changelog.server.model')

// Router used for middleware
router.route('/')
  .get(newsletters.list)
  .post(newsletters.create)



module.exports = router;