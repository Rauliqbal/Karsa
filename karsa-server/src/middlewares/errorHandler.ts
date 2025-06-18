import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  const isDev = process.env.NODE_ENV === 'development';

  const errorMessage =
    err instanceof Error
      ? err.message
      : typeof err === 'string'
      ? err
      : 'Unexpected error';

  const errorResponse = {
    message: 'Terjadi kesalahan pada server',
    ...(isDev && { error: errorMessage }), 
  };

  res.status(statusCode).json(errorResponse);
};
