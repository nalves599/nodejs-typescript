import express from 'express'

const app = express()

const PORT = process.env.PORT || 8085

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
