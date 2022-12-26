import type { Request } from 'express';
declare module 'express' {
  export interface Request {
    _auth?: string;
    auth?: any;
  }
}
