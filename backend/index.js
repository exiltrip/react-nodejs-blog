const express = require("express")
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')
const PORT = process.env.PORT || 8080
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/api', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.use(express.json())
app.use('/api',  userRouter)
app.use('/api',  postRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
