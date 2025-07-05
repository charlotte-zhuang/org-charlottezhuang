"use client";

import verifyMessage from "@/api/verify-message";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { BadgeCheckIcon, BadgeXIcon } from "lucide-react";
import { useMemo, useState } from "react";

const EXAMPLE_MESSAGE: string = `
# charlotte zhuang

this is an example message that you can verify that i wrote.

if you can trust this site, you can trust that i wrote this.

## online presence

- github: charlotte-zhuang
- linkedin: charlotte-zhuang
- instagram: charlottechipcookie

## websites

- charlottezhuang.org
- charlottezhuang.com
- charlottechip.org
- charlottechip.com
`.trim();

export default function MessageVerifier() {
  const [message, setMessage] = useState("");
  const isValid = useMemo(() => verifyMessage(message), [message]);

  const handleLoadExample = (): void => {
    setMessage(EXAMPLE_MESSAGE);
  };

  return (
    <div className="flex flex-col gap-2 items-start">
      <h2 className="text-md font-bold">Message Verifier</h2>

      <p>authenticate that i wrote something.</p>

      <p>
        this form checks the hash of the contents against a list of known
        hashes.
      </p>

      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="paste the entire message here"
        className="h-[200px]"
      />

      <div className="flex w-full gap-2 justify-between items-center h-12">
        <div>
          <Badge
            variant="secondary"
            className={cn(
              "text-white",
              isValid
                ? "bg-blue-500 text-white dark:bg-blue-600"
                : "bg-red-500 text-white dark:bg-red-600",
              { hidden: message.length === 0 }
            )}
          >
            {isValid ? (
              <>
                <BadgeCheckIcon />
                verified
              </>
            ) : (
              <>
                <BadgeXIcon />
                unverified
              </>
            )}
          </Badge>
        </div>

        <div className="flex gap-2">
          <Button
            variant="destructive"
            onClick={() => setMessage("")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setMessage("");
              }
            }}
            className={cn({ hidden: message.length === 0 })}
          >
            clear
          </Button>

          <Button
            variant="outline"
            onClick={handleLoadExample}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleLoadExample();
              }
            }}
          >
            load example
          </Button>
        </div>
      </div>
    </div>
  );
}
