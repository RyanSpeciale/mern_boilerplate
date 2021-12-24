const express = require('express')
const path = require('path')
const app = express()


const DIST_DIR = path.join(__dirname, '../dist'); 
const HTML_FILE = path.join(DIST_DIR, 'template.html'); 

app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE); 
   });




app.listen(3000, () => {
    console.log('Server listening')
})