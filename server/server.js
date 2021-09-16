const express = require   ('express')
const dotenv = require   ('dotenv')
const connectDB =require ('./config/db.js')
const userRoutes = require   ('./routes/userRoutes.js')
const medicineRoutes = require   ('./routes/medicineRoutes.js')

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/medicine', medicineRoutes)
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  )