/**
 * Validation Middleware - ObjectId validation
 */

/**
 * Validates request body against Joi schema
 */
export const validateBody = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false, // Validate all fields, not just the first error
      stripUnknown: true, // Remove unknown fields
    });

    if (error) {
      return next(error);
    }

    req.body = value;
    next();
  };
};

/**
 * Validates query parameters against Joi schema
 */
export const validateParams = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.params, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      return next(error);
    }

    Object.assign(req.query, value);
    // req.query = value; will raise error
    next();
  };
};
