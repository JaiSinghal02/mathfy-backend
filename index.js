const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./controller/route')
const connect = require('./controller/functions/connect')

const corsOptions = {
    origin: '*'
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(router)
connect()
const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`[index.js] Server running at port=${port}`)
})