const {Router} = require('express')
const Rate = require('../models/Rate')
const router = Router()
const hiWatch = require('../middleware/watch.middleware')
const events = require('events')
const emitter = new events.EventEmitter();
// /api/rate/add
router.post('/add',hiWatch, async (req, res) =>{
 try{
     console.log(req.body.rate)
     const rate = new Rate({
         rate: req.body.rate, date: req.body.date, color: req.body.color, score: req.body.score, owner: req.user.userId
     })
     await rate.save()
     res.status(201).json({rate})
 } catch (e){
   res.status(500).json({message: e.message})
 }
})

// /api/rate/data
router.get('/data',hiWatch, async(req, res) =>{
  try{
      const dataRate = await Rate.find({owner: req.user.userId})
      res.json(dataRate)
  } catch (e){
    res.status(500).json({message: "Невдалося дістати дані"})
  }
})

// /api/rate/delete
router.post('/delete', async(req, res) => {
    try{
        console.log(req.body)
        await Rate.deleteMany(req.body);
        res.status(201).send({message: 'ok'})
    }catch (e){
        res.status(500).json({message: "Something went wrong, please try again"})
    }
})
// /api/rate/get-messages
router.get('/get-messages', (req, res) => {
    emitter.once('newMessage', (message) => {
        res.json(message)
    })
})

// /api/rate/new-messages
router.post('/new-messages', ((req, res) => {
    const message = req.body;
    emitter.emit('newMessage', message)
    res.status(200)
}))



module.exports = router