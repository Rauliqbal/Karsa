import { ZodError } from "zod";

const validate = (schema) => (req, res, next) => {
  try {
    const parsed = schema.parse(req.body);
    req.body = parsed;
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: error,
        error: error.flatten().fieldErrors,
      });
    }
    next(error);
  }
};

export default validate;
