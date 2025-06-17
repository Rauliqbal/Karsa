import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = res.statusCode !== 200 ? res.statusCode : 500;

  const message =
    err instanceof Error
      ? err.message
      : typeof err === 'string'
      ? err
      : 'Unexpected error';

  res.status(status).json({
    message: 'Terjadi kesalahan pada server',
    error: message,
  });
};
