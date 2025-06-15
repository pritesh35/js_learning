require('dotenv').config()
const express = require('express')

const app = express()
// const port = 4000

app.get('/', (req,res) =>{
  res.send(`hey it's working`)
})

app.get('/github', (req, res) => {
  res.send(`<a href='https://github.com/pritesh35'><button>visit github profile</button></a>`)
  console.log('hey your github handle is now being Visited')
})

app.get('/instagram', (req, res) => {
  res.send(`<a href='https://www.instagram.com/pritesh___17/'><button>View Insta Handle</button></a>`)
  console.log('Hey you insta handle is bieng visited')
})

app.get('/login', (req, res) => {
  res.send('hey this is login page bruh')
})

// app.listen(process.env.PORT, () => {
//   console.log(`hello, your application is running port : ${process.env.PORT}`)
// })
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from serverless backend!" });
}
