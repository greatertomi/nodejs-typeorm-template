import { JwtPayload } from './JwtPayload';

export {};

declare global {
  namespace Express {
    export interface Request {
      jwtPayload?: JwtPayload;
    }
  }
}
