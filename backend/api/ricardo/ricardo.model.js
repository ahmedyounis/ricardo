const mongoose = require('mongoose')

const { Schema } = mongoose

let Ricardo = null

try {
  const RicardoSchema = new Schema({
    _id: {
      timestamp: Number,
      author: String
    },
    author: String,
    field1: String,
    field2: String,
    field3: String,
    field4: String,
    field5: String,
    ricardoConfirmed: {
      type: Boolean,
      default: false
    }
  })
  Ricardo = mongoose.model('Ricardo', RicardoSchema)
} catch (e) {
  Ricardo = mongoose.model('Ricardo')
}

module.exports = Ricardo
