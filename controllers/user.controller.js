const User = require("../models/user.model")
const bcrypt = require('bcrypt')
const signIn = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ msg: "provide complete data" })
        }
        
        const user = await User.findOne({ where: { email } })
        if(!user){
            
            return res.status(400).json({ msg: "invalid email address" })
        }
        const isCompared = await bcrypt.compare(password , user.password)
        if(!isCompared){
            return res.status(400).json({ msg: "invalid password" })    
        }

        res.status(200).json({ status: "success", msg: "login success" })

    }
    catch (err) {
        res.status(500).json({ status: "err", msg: { err: err.message } })
    }
}
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.status(400).json({ msg: "provide complete data" })
        }

        const user = await User.findOne({ where: { email } })

        if (user) {
            return res.status(400).json({ msg: "email already exist" })
        }
        const salt = await bcrypt.genSalt(10)
        const hash_password = await bcrypt.hash(password ,salt)

        const new_user = await User.create({email , password : hash_password, username})
        
        res.status(200).json({ status: "success", msg: "user created successfully" })

    }
    catch (err) {
        res.status(500).json({ status: "err", msg:err.message })
    }
}
const getUser = async (req, res) => {
    try {
        const { username, email, password } = req.body

    }
    catch (err) {
        res.status(500).json({ status: "err", msg: { err: err.message } })
    }
}


module.exports = { signIn, register, getUser }