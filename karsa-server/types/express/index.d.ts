import { JwtPayload } from "jsonwebtoken";
import { Multer } from "multer";

declare namespace Express {
  export interface Request {
    file?: Express.Multer.File;
    files?: Express.Multer.File[];

    user?: { id: string } | JwtPayload;
  }
}
