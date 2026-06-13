import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();
const provider = new ethers.JsonRpcProvider(process.env.FUJI_RPC_URL);

export async function verifyPayment(txHash: string) {
  const tx = await provider.getTransaction(txHash);

  if (!tx) {
    return false;
  }

  const reciver = process.env.RECEIVER_ADDRESS!.toLowerCase();

  if (tx.to?.toLowerCase() != reciver) {
    return false;
  }

  const amount = ethers.parseEther("0.01");
  if (tx.value < amount) {
    return false;
  }

  return true;
}
