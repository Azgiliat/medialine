const  express = require('express')
const router = express.Router()

router.get('/about', function (req, res) {
  console.log('request abiut')
  res.send('About birds')
})

module.exports = router
