require('dotenv').config()
const app = require('express')()
const cors = require('cors')
const demux = require('./demux')
const postRoutes = require('./api/post/post.route')
const ricardoRoutes = require('./api/ricardo/ricardo.route')
const io = require('./utils/io')

app.use(cors())

app.use('/posts', postRoutes)    // TODO Add dfferent routes

app.use('/ricardos', ricardoRoutes)    // TODO Add dfferent routes

const server = app.listen(process.env.PORT, () => console.info(`Ricardo App listening on port ${process.env.PORT}!`))

io.connect(server)

demux.watch()
