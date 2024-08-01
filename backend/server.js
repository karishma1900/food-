import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRouter.js'
import 'dotenv/config'
import cartRouter from './routes/cartRouter.js'
import orderRouter from "./routes/orderRouter.js"





//app config
const app = express()
const port = process.env.PORT || 4000;


//middleware
app.use(express.json())
app.use(cors())
// db connection

connectDB();

// api end point
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.get("/", (req,res)=>{
    res.send("Api Working")
})

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://karishma:karishma2000@cluster0.naj7azn.mongodb.net/?