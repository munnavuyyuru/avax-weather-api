import { Router } from "express";
import { verifyPayment } from "../services/verifyPayment";
import { isUsed, markUsed } from "../services/transactionStore";
import { getWeather } from "../services/weatherService";

const router = Router();

router.post("/", async (req, res) => {
  const { txHash } = req.body;
  const { city } = req.body;

  if (isUsed(txHash)) {
    return res.status(409).json({
      success: false,
      message: "Transaction already used",
    });
  }

  const paid = await verifyPayment(txHash);

  if (!paid) {
    return res.status(401).json({
      success: false,
    });
  }

  markUsed(txHash);

  const weather = await getWeather(city);

  return res.json({
    success: true,
    weather,
  });
});

export default router;
