const UserModel = require('../models/User')
const ErrorResponse = require('../utils/errorResponse')
const bcrypt = require('bcryptjs')

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