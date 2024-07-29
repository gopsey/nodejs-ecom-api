const ErrorResponse = require('../utils/errorResponse')

const errorHandler = (err, req, res, next) => {
   let error = { ...err }
   error.message = err.message;

   // Mongoose handling wrong ID
   const message = err.name === 'CastError' ? `No product found with ID: ${err.value}` : err;

   error = new ErrorResponse(message, 404)
   res.status(error.statusCode || 500).json({ success: false, error: error.message || 'Server Error' })
}

module.exports = errorHandler;