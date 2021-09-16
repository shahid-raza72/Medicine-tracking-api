const mongoose = require('mongoose')


const medicineSchema = mongoose.Schema(
  {
   
    name: {
      type: String,
      required: true,
    },
    medicinetype: {
      type: String,
      required: true,
    },
    isTaken: {
        type: Boolean,
        required: true,
        default: false,
      },
    TakenAt:{
      type: Date
    },
    quantity: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Medicine = mongoose.model('Medicine', medicineSchema)

module.exports = Medicine