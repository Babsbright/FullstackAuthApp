const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const verifyAuth = require('../middleware/verifyAuth')
// POST | /api/v1/register | public | register user
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body


        if (!name || !email || !password) {
            res.status(400).json({
                msg: 'Please fill the required fields',
                success: false
            })
        }

        let user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                msg: 'User already exists',
                success: false
            })
        }


        user = new User({
            name,
            email,
            password
        })

        // paylaod || {id: user._id}
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: 36000
        })

        const slat = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, slat)
        await user.save()
            .then((result) => {
                res.status(201).send({
                    message: "User Created Successfully",
                    result,
                    token
                });
            })



    } catch (err) {
        console.log(err)
        res.status(400).json({ success: false })
    }
})
// POST api/v1/login | public | login exixting user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                msg: 'Invalid credentials',
                success: false
            })
        }


        let user = await User.findOne({ email }).select('+password')
        if (!user) return res.status(400).json({
            msg: 'Invalid credentials',
            success: false
        })

        // paylaod || {id: user._id}
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: 36000
        })


        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({
            msg: 'Invalid credentials',
            success: false
        })

        res.status(200).send({
            message: "Login Successful",
            user,
            token
        });
    }

    catch (err) {
        console.log(err)
        res.status(400).json({ success: false })
        res.status(500).json({ msg: 'SERVER ERROR' })
        
    }
})
// GET api/v1/user | private | get logged in user for the process of auth
router.get('/user', verifyAuth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('posts')
        res.status(200).json({
            user,
            success: true
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).json({ msg: 'SERVER ERROR' })
    }
})
module.exports = router