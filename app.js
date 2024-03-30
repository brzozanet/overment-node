import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import flash from "connect-flash";
import { router } from "./routes/routes.js";

export const app = express();

// required for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

// app.use(bodyParser)
// app.use(cookieParser)
app.use(flash());

app.use("/", router);
