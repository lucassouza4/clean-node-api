import * as express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("olá!");
});

app.listen(3000, () => {
  console.log("ouvindo na porta 3000");
});
