import dotenv from 'dotenv'
import app from './app'

dotenv.config()
const port = process.env.PORT || 8000

app.get('/', (req,res) => {
  res.send('hello world')
})

app.listen(port,() => {
  console.log(`[INFO 🔥] : Server running on http://localhost:${port}`)
})