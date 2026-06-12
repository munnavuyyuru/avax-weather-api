import fs from "fs";

const FILE = "src/data/usedTransactions.json";

export function isUsed(txHash: string) {
  const data = JSON.parse(fs.readFileSync(FILE, "utf8"));

  return data.includes(txHash);
}

export function markUsed(txHash: string) {
  const data = JSON.parse(fs.readFileSync(FILE, "utf8"));

  data.push(txHash);

  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}
