import { createHash } from "crypto";

export default function verifyMessage(message: string): boolean {
  // TODO: move to database and implement logic in server
  // hashes should be secret and protected by rate limiting or false positives can be brute forced
  const goodHashes: readonly string[] = [
    "ggEARWfjq7aUiwW0G6TlkUbZNr943yYhegGQh0Ktnk8=",
    "8oqD7gJZ5EOicsJFl4X9/NohR8lQ9f3WtBRiE5jlPoc=",
  ];

  // remove all whitespace since we don't really care about them
  const hash = createHash("sha256")
    .update(message.replaceAll(/\s/g, ""))
    .digest("base64");

  return goodHashes.includes(hash);
}
