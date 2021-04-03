const express = require('express')
const app = express()


app.set("view engine", "ejs");


app.use(express.static("public"));


app.get('/', (req, res) => {
    res.
})




const PORT = 5000
app.listen(PORT, () => {
    console.log('server is running..')
})
