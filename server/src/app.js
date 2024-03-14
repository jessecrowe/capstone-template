import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import keys from "./config/keys";
import { PORT } from "./config/app.config";
import router from "./routes";

mongoose
.connect(keys.database.DB_URL)
.then(() => console.log("[Database] Connection established."))
.catch((err) => console.log("[Database] Connection failed: ", err));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(keys.app, router);

app.listen(PORT, () =>
console.log(`[Server] Listening for requests at http://localhost:${PORT} `)
);

// import { DB_URL, jwtSecret, jwtTTL} from "./config/db.config";