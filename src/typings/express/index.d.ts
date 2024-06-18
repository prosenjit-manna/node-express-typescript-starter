import { Express } from 'express';

declare global {
  namespace Express {
    interface Request extends Request {
      jwt?: string;
    }
  }
}
