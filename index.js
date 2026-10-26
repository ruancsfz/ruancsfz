import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 3000

app.get('/', (req, res) => {
    
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))