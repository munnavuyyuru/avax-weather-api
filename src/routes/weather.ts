import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.status(402).json({
    message: "Payment Required",
    price: "0.01 AVAX",
    reciver: "0x0A63E25950349417A21BFF93e45EFFDD71Fe2f0b", // avax custom fuji network address of wallet 2
  });
});

export default router;
