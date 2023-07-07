import { Router } from "express";
const router = Router();

router.get("/items", (req, res) => {
  res.send({ data: "aqui van los modelos" });
});

export { router };
