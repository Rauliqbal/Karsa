import dotenv from 'dotenv'
import app from './app'
import routes from './routes'

dotenv.config()
const port = process.env.PORT || 8000

app.get('/', (req,res) => {
  res.send('hello world')
})

// routes
app.use('/api/v1/', routes)

app.listen(port,() => {
  console.log(`[INFO 🔥] : Server running on http://localhost:${port}`)
})