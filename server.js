import 'dotenv/config.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import cors from 'cors'
// import { createProxyMiddleware } from 'http-proxy-middleware';
// import('./config/database.js')

import { router as authRouter } from './routes/admins.js'

const app = express()

app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'build')
  )
)
app.use(cors())
app.use(logger('dev'))
app.use(express.json())


app.use('/api/admins', authRouter)

app.get('/*', function (req, res) {
  res.sendFile(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'build', 'index.html')
  )
})

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`)
})