const { json } = require('express/lib/response')
const mongoose = require('mongoose')

const Data = mongoose.model('Data',new mongoose.Schema({
    data:{
        type: JSON
    }
}))

module.exports = Data