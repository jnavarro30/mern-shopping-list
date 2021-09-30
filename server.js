const express = require('express')
const app = express()

app.use(express.json())

// routes
const itemsRouter = require('./items/router')
app.use('/items', itemsRouter)

// error handlers
app.use((req, res, next) => {
    next({
        status: 404,
        message: `${req.originalUrl} not found.`
    })
})

app.use((err, req, res, next) => {
    console.log(err)
    const { status = 500, message = 'Something is wrong!' } = err
    res.status(status).json({ err: message })
})

// connect to database
const mongoose = require('mongoose')
const db = require('./config/keys').mongoURI

mongoose
    .connect(db)
    .then(() => console.log('Database connection established...'))
    .catch(err => console.log(err))

// run server
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is running on port ${port}`))