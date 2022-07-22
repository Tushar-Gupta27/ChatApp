import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from "./routes/userRouter.js";
import conversationRoutes from "./routes/conversationRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
const app = express();
const PORT = 5000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", userRoutes);
app.use("/conversation", conversationRoutes);
app.use("/message", messageRoutes);

const mongoURL =
  "mongodb+srv://tushargupta:tushar27@socialmediamerncluster.d7rjp.mongodb.net/chatDB?retryWrites=true&w=majority";

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`DB Started & Server started on ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(`MongoError`);
    console.log(e.message);
  });
