declare module 'express' {
  export interface Request {
    _auth?: string;
    auth?: any;
  }
}
