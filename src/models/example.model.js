const mongoose = require('mongoose')

const { Schema } = mongoose

const exampleSchema = new Schema({
  Created_date: {
    type: Date,
    default: Date.now
  },
  txid: {
    type: String,
    required: 'txid required'
  },
  data: {
    type: String,
    required: 'data required'
  }
})

module.exports = mongoose.model('Example', exampleSchema)
