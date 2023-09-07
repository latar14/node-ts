import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();

const express = require('express');

const Mongo = 'mongodb+srv://latar14:said-akhmed@cluster0.ezxqi.mongodb.net/testUsers'

const app = express();

app.use(express.json());
app.use(require("./routes/user.routes"));


mongoose
  .connect(Mongo)
  .then(() => console.log("Подключено к Mongo"))
  .catch(() => console.log("Ошибка подключения"));

app.listen(process.env.SERVER_PORT, () => {
  console.log(` Сервер: ${process.env.SERVER_PORT} был запущен`);
});
