import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const city = req.query.city || "Guntur";

  return res.status(402).json({
    success: false,
    city,
    price: "0.01 AVAX",
    receiver: process.env.RECEIVER_ADDRESS,
  });
});

export default router;
