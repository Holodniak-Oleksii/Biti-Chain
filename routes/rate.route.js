const {Router} = require('express')
const Rate = require('../models/Rate')
const History = require('../models/History')
const router = Router()
const hiWatch = require('../middleware/watch.middleware')
const events = require('events')
const emitter = new events.EventEmitter();
// /api/rate/add
router.post('/add',hiWatch, async (req, res) =>{
 try{
     console.log(req.body.rate)
     const rate = new Rate({
         rate: req.body.rate, date: req.body.date, color: req.body.color, score: req.body.score, currency: req.body.currency, owner: req.user.userId
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

// /api/rate/all-history
router.get('/all-history',hiWatch, async(req, res) =>{
    try{
        const dataHistory = await History.find({owner: req.user.userId})
        res.json(dataHistory)
    } catch (e){
        res.status(500).json({message: "Невдалося дістати дані"})
    }
})

// /api/rate/delete
router.post('/delete', hiWatch, async(req, res) => {
    try{
        console.log(req.body)
        await Rate.deleteMany(req.body.data);
        const history = new History({
            rate: req.body.data.rate, date: req.body.data.date, color: req.body.data.color, score: req.body.data.score, currency: req.body.data.currency, result: req.body.result, owner: req.user.userId
        })
        await history.save()
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