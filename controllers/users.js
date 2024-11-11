const dotenv = require('dotenv');
dotenv.config({ path: './config.env' })
const UserModel = require('../models/User')
const ErrorResponse = require('../utils/errorResponse')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// @desc Signup new User
// @route POST /api/v1/signup
exports.signup = (req, res, next) => {
   req.body.passwordHash = bcrypt.hashSync(req.body.password, 10) // 10 is the complexity of hashing
   UserModel.create(req.body)
      .then(user => {
         res.status(201).json({ success: true, data: user })
      })
      .catch(error => next(new ErrorResponse(`Unable to signup new user`, 400)))
}

// @desc Login User
// @route POST /api/v1/login
exports.login = (req, res, next) => {
   UserModel.findOne({ email: req.body.email })
      .then(user => {
         // Comparing passwords from user and from DB
         if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
            const secret = `${process.env.API_SECRET}`
            const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1d' }) // id, secret and expiration for jwt
            const response = {
               user: user.email,
               authToken: token
            }
            res.status(200).json({ success: true, data: response })
         } else {
            next(new ErrorResponse(`Email or Password is incorrect!`, 401))
         }
      })
      .catch(error => {
         console.error('Error in login:', error);
         next(new ErrorResponse(`Internal Server error!`, 500))
      })
}