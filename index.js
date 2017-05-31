var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var router = express.Router()

router.use(require('./app/routes/user_routes'))
app.use('/api',router)
