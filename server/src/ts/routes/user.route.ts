import express from "express";
import { Request, Response, NextFunction } from "express";
import fs from "fs";
import { body, validationResult } from "express-validator";

const userRouter = express.Router();

function handleError(req: Request, res: Response, next: NextFunction): void {
  fs.readFile("/file-does-not-exist", function(err: Error, data) {
    if (err) {
      next(err); // Pass errors to Express.
    } else {
      res.send(data);
    }
  });
}

userRouter.get("/", handleError, (err: Error, req: Request, res: Response) => {
  res.send("hello world!");
});

userRouter.post(
  "/",
  body("username")
    .isEmail()
    .normalizeEmail(),
  // password must be at least 5 chars long
  body("password").isLength({ min: 5 }),
  (req: Request, res: Response) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else return res.send("no validation errors!");
  }
);

export { userRouter };
