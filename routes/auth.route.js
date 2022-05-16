const {Router} = require('express')
const router = Router()
const config = require('config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const hiWatch = require("../middleware/watch.middleware");
// const nodemailer = require('nodemailer');
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth:{
//         user: config.get('email'),
//         pass: config.get('pass')
//     }
// })


// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Minimum password length 6 characters')
            .isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect data during registration'
                })
            }

            const {name, email, password, confirm} = req.body

            if(confirm !== password){
                return res.status(400).json({ message: 'Passwords do not match' })
            }

            const candidate = await User.findOne({ email })

            if (candidate) {
                return res.status(400).json({ message: 'This user already exists' })
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({name, email, password: hashedPassword })

            await user.save()

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '3h'}
            )
            res.json({token, userId: user.id})

        } catch (e) {
            res.status(500).json({ message: 'Something went wrong, please try again' })
        }
    })


// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Enter the password').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect login information'
                })
            }

            const {email, password} = req.body
            const user = await User.findOne({ email })

            if (!user) {
                return res.status(400).json({ message: 'User is not found' })
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.status(400).json({ message: 'Wrong password, please try again' })
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '3h' }
            )

            res.json({ token, userId: user.id })

        } catch (e) {
            res.status(500).json({ message: 'Something went wrong, please try again' })
        }
    })


// /api/auth/all
router.get('/all', hiWatch ,async (req, res) =>{
    try{
        const user = await User.find({_id: req.user.userId})
        res.json(user)
    }catch (e){
        res.status(500).json({message: "Something went wrong, please try again"})
    }
})


// /api/auth/set-score
router.post('/set-score', hiWatch ,async (req, res) =>{
    try{
        const dataRate = await User.find({_id: req.user.userId})
        let user = await User.findOneAndUpdate({'email': dataRate[0].email}, {score: req.body.score})
        res.send(user)
    }catch (e){
        res.status(500).json({message: e.message})
    }
})
// // /api/auth/send-me-message
// router.post('/send-me-message' ,async (req, res) =>{
//     try{
//         const  mailOptions = {
//             form: req.body.email,
//             to: config.get('email'),
//             subject: `Лист із сайту BitiChain від ${req.body.name}`,
//             text: req.body.text
//         }
//         console.log(mailOptions)
//         transporter.sendMail(mailOptions, err=>{
//             res.send(err)
//         })
//         res.send('ok')
//     }catch (e){
//         res.status(500).json({message: e.message})
//     }
// })
module.exports = router