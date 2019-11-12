const newsletters = require('../controllers/newsletter.server.controller.js'),
    express = require('express'), 
    router = express.Router()

router.route('/')
  .get(newsletters.list);
  
module.exports = router;