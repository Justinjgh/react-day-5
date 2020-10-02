require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controllers/ctrl') 
const app = express()
const { CONNECTION_STRING, SERVER_PORT } = process.env

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('database is all good')
    app.listen( SERVER_PORT , () => console.log( `listening on ${SERVER_PORT}` ))
})

const baseUrl = '/api/post'
// const baseCommentUrl = '/api/comment'

app.get(baseUrl, ctrl.getPost)
app.post(baseUrl, ctrl.addPost)
app.put(baseUrl + '/:id' , ctrl.editPost)
app.delete(baseUrl + '/:id', ctrl.deletePost)


