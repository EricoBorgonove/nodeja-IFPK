const express = require('express')
const router = require('./routes')
const app = express()
const { engine } = require('express-handlebars')

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

app.use('/', router)

app.listen(3000, () => {
    console.log(`server started`)
})