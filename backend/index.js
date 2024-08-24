import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import Connection from './db/Conn.js'
import signupRouter from './routes/User.route.js'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 4001
Connection()

app.use("/user",signupRouter)

app.listen(port,()=>{
    console.log(`Server Listening To: ${port}`);
})

