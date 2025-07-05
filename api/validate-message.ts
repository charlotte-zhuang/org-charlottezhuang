import { createHash } from "crypto";

export default function validateMessage(message: string): boolean {
  // TODO: move to database and implement logic in server
  const goodHashes: readonly string[] = [
    "88CTopGju4frOBjFvvzAvow2l10UAXceSWMQ/zMu4w8=",
  ];

  // remove all whitespace since we don't really care about them
  const hash = createHash("sha256")
    .update(message.replaceAll(/\s/g, ""))
    .digest("base64");

  return goodHashes.includes(hash);
}
