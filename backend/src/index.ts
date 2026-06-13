import express from "express";
import weatherRoute from "./routes/weather";
import unlockRouter from "./routes/unlock";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  res.json({
    message: "Weather API Running",
  });
});

app.use("/weather", weatherRoute);
app.use("/weather/unlock", unlockRouter);

app.listen(3000, () => {
  console.log("Server running on 3000");
});
