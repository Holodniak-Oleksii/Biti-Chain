const {Router} = require('express')
const router = Router()
const config = require('config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const hiWatch = require("../middleware/watch.middleware");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.get('ApiKey'));

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Неправельний email').isEmail(),
        check('password', 'Пароль має містити мінінмум 6 символів')
            .isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Неправельна інформація при реєстрації'
                })
            }

            const {name, email, password, confirm} = req.body

            if(confirm !== password){
                return res.status(400).json({ message: 'Паролі не збігаються' })
            }

            const candidate = await User.findOne({ email })

            if (candidate) {
                return res.status(400).json({ message: 'Цей користувач уже існує' })
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({name, email, password: hashedPassword })

            await user.save()

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '3h'}
            )
            res.json({token, userId: user.id, role: user.role})

        } catch (e) {
            res.status(500).json(e.message)
        }
    })


// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Неправельний email').isEmail(),
        check('password', 'Введіть пароль').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Неправильна інформація для входу'
                })
            }

            const {email, password} = req.body
            const user = await User.findOne({ email })

            if (!user) {
                return res.status(400).json({ message: 'Користувача не знайдено' })
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.status(400).json({ message: 'Неправильний пароль, спробуйте ще раз' })
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )

            res.json({ token, userId: user.id, role: user.role })

        } catch (e) {
            res.status(500).json({ message: 'Сталася помилка, спробуйте ще раз' })
        }
    })


// /api/auth/all
router.get('/all', hiWatch ,async (req, res) =>{
    try{
        const user = await User.find({_id: req.user.userId})
        res.json(user)
    }catch (e){
        res.status(500).json({message: "Сталася помилка, спробуйте ще раз"})
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
// /api/auth/send-me-message
router.post('/send-me-message',    [
    check('email', 'Неправельний email').isEmail(),
    check('name', `Введіть ім'я`).exists(),
    check('text', `Введіть текст`).exists()
],async (req, res) =>{
    try{
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Неправильна інформація для входу'
            })
        }

        const  mailOptions = {
            to: config.get('email'),
            form: req.body.email,
            subject: `Лист із сайту BitiChain від ${req.body.name}`,
            text: req.body.text,
            html: `<strong>${req.body.text}</strong>`
        }
        await sgMail.send(mailOptions);
        res.send('ok')
    }catch (e){
        res.status(500).json({message: e.message})
    }
})

// /api/auth/user-list
router.get('/user-list', hiWatch ,async (req, res) =>{
    try{
        const user = await User.find({})
        res.json(user)
    }catch (e){
        res.status(500).json({message: "Не має авторизації"})
    }
})

// /api/auth/delete
router.post('/delete', hiWatch ,async (req, res) =>{
    try{
        await User.deleteMany(req.body.data);
        res.status(201).send({message: 'ok'})
    }catch (e){
        res.status(500).json({message: "Сталася помилка, спробуйте ще раз"})
    }
})

// /api/auth/edit
router.post('/edit', hiWatch ,async (req, res) =>{
    try{
        let user = await User.findOneAndUpdate({'_id': req.body.id}, {score: req.body.score})
        res.send(user)
    }catch (e){
        res.status(500).json({message: "Сталася помилка, спробуйте ще раз"})
    }
})

module.exports = router