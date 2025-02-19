import express, {Express, Request, Response} from "express"
import dotenv from "dotenv"
import DocumentationRouter from "./routes/documentation"
import cors from "cors"


dotenv.config();

const application : Express = express();

application.use(express.json());
application.use(cors());
application.use("/documentation", DocumentationRouter);

application.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`))