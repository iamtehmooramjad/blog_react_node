import express from "express"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser"

const app = express()


app.use(express.json())
app.use(cookieParser)
app.use("/api/posts", postRoutes)
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

app.get("/test",(req, res)=>{
    res.send("test")
})


const port = 3000
app.listen(port, () => {
    console.log('Server running on ' + port)
})