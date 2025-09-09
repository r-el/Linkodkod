/**
 * Error Handling Middleware
 * Centralized error handling for the application (server side)
 *
 * @param {number} statusCode - HTTP status code
 * @param {string} message - Error message
 * @param {boolean} isOperational - Indicates if the error is operational (true) or program error (false)
 */

class ApiError extends Error {
  constructor(statusCode, message, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    /* Captures the stack trace of the error for debugging
        targetObject: The object that will receive the stack trace.
        constructorOpt (Optional): The function that created the targetObject.
    */
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Async error wrapper
 */
const catchAsync = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

export { ApiError, catchAsync };
