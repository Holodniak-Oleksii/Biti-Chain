const {Router} = require('express')
const router = Router()
const Watch = require('../models/Watch')
const hiWatch = require('../middleware/watch.middleware')

// /api/watch/add-item
router.post('/add-item',hiWatch, async (req, res) =>{
        try{
            const exit = await Watch.findOne({name: req.body.name, owner: req.user.userId})
            if(exit){
                return res.status(500).json({message: "Already to added"})
            }
            const watch = new Watch({
                name: req.body.name, owner: req.user.userId
            })
            await watch.save()
            res.status(201).json({watch})

        }catch (e){
            res.status(500).json({message: "Something went wrong, please try again"})
        }
})

// /api/watch/all
router.get('/all', hiWatch ,async (req, res) =>{
        try{
            const watch = await Watch.find({owner: req.user.userId})
            res.json(watch)
        }catch (e){
            res.status(500).json({message: "Something went wrong, please try again"})
        }
 })

// /api/watch/delete-item
router.post('/delete-item',async (req, res) =>{
    try{
        await Watch.findOneAndDelete({ _id: req.body.data });
    }catch (e){
        res.status(500).json({message: "Something went wrong, please try again"})
    }
})

module.exports = router
