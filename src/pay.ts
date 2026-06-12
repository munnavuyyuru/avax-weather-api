import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.FUJI_RPC_URL);

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

  console.log("Sender:", wallet.address);

  const tx = await wallet.sendTransaction({
    to: process.env.RECEIVER_ADDRESS!,
    value: ethers.parseEther("0.01"),
  });

  console.log("Tx Hash:");
  console.log(tx.hash);

  await tx.wait();

  console.log("Payment confirmed");
}

main().catch(console.error);
