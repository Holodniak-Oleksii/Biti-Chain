const express = require("express")
const config = require("config")
const mongoose = require("mongoose")
const app = express()
const authRoute = require('./routes/auth.route')
const rateRoute = require('./routes/rate.route')
const watchRoute = require('./routes/watch.route')
const PORT = config.get("port")  || 5000
const URI = config.get("mongoURI")

app.use(express.json({extended: true}))
app.use('/api/auth', authRoute)
app.use('/api/rate', rateRoute)
app.use('/api/watch', watchRoute)

async function start(){
  try{
    await mongoose.connect(URI,{})
    app.listen(PORT, ()=>{
      console.log(`Server started on port ${PORT}...`);
    })
  }catch(e){
    console.log(e)
    process.exit(1)
  }
}

start()
