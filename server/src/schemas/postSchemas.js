/**
 * Zod Validation Schemas
 * Defines validation rules for post endpoints
 */

import Joi from "joi";

export const createPostSchema = Joi.object({
  imgSrc: Joi.string().trim().required(),
  description: Joi.string().trim().required(),
  likes: Joi.number().integer().required(),
  author: Joi.string().trim().required().min(2).max(20),
  createdAt: Joi.date().iso().default(new Date().toISOString()), // TODO: The server will be responsible for generating the post time
});

export const idParamsSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
});
