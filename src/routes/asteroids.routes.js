import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send({ data: "aqui van los modelos" });
});

export { router };
