import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required and must be a string" },
        { status: 400 }
      );
    }

    // TODO: move to database and implement logic in server
    // hashes should be secret and protected by rate limiting or false positives can be brute forced
    const goodHashes: readonly string[] = [
      "ggEARWfjq7aUiwW0G6TlkUbZNr943yYhegGQh0Ktnk8=",
      "8oqD7gJZ5EOicsJFl4X9/NohR8lQ9f3WtBRiE5jlPoc=",
      "rnfKeKfK8uRrVc+AkRwSOJwCY8lDztlx+cFGpl/iV9s=",
    ];

    // remove all whitespace since we don't really care about them
    const hash = createHash("sha256")
      .update(message.replaceAll(/\s/g, ""))
      .digest("base64");

    const isValid = goodHashes.includes(hash);

    return NextResponse.json({ isValid });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }
}