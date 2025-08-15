import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) =>{
    res.json({ message: 'Test erfolgreich' })
})

app.listen(PORT, () =>{
    console.log(`Server läuft auf http://localhost:${PORT}`)
})


