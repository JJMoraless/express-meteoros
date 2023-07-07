import { Router } from "express";
import { readdirSync } from "fs";
import { _dirname } from "../utils/vars.js";
const PATH_ROUTERS = _dirname(import.meta.url);
const router = Router();


/**
 * recive un string
 * devulve el ultimo item del string divido por .
*/
const filesNames = readdirSync(PATH_ROUTERS);

const cleanFile = (fileName) => {
  const file = fileName.split(".").shift();
  return file;
};

filesNames.forEach(async (fileName) => {
  const cleanName = cleanFile(fileName);
  if (cleanName !== "index") return;
  const { router } = await import(`./${fileName}`);
  router.use(`/${cleanName}`, router);
});

export { router };
