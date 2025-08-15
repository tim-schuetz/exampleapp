import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) =>{
    res.json({ message: 'Test erfolgreich' })
})

app.listen(8080, '0.0.0.0', () =>{
    console.log(`Server läuft auf http://0.0.0.0:8080`)
})


