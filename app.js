const express = require('express')
const app = express()


app.set("views", "./views");
app.set("view engine", "ejs");


app.use(express.static("public"));


app.get('/a', (req, res) => {
    res.render('index')
})




const PORT = 5000
app.listen(PORT, () => {
    console.log('server is running..')
})
