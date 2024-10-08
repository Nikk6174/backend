const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorhandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goRoutes'))
app.use(errorhandler)

app.listen(port, ()=> console.log(`sever started on port ${port}`))