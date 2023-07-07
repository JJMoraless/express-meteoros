import "dotenv/config";
import express from "express";
import cors from "cors";
const PORT = process.env.PORT || 3001;
const app = express();
import { router } from "./routes/index.js";


app.use(cors());
// app.use(router);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
