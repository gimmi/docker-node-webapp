const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.get('/api/*', function(req, res) {
    res.send('TODO API')
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, function() {
    console.log(`Running on http://localhost:${port}/`)
    console.log('Base path:', __dirname)
})
