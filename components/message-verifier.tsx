"use client";

import verifyMessage from "@/api/verify-message";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { BadgeCheckIcon, BadgeXIcon } from "lucide-react";
import { useMemo, useState } from "react";

const EXAMPLE_MESSAGE: string = `
why chocolate chip cookies are the best

1. chocolate is delicious
2. cookies are the perfect size for a sweet treat
3. they remind me of childhood

written by charlotte
verify on charlottezhuang.org
`.trim();

export default function MessageVerifier() {
  const [message, setMessage] = useState("");
  const isValid = useMemo(() => verifyMessage(message), [message]);

  const handleLoadExample = (): void => {
    setMessage(EXAMPLE_MESSAGE);
  };

  return (
    <div className="flex flex-col gap-2 items-start">
      <h2 className="text-md font-bold">verify on charlottezhuang.org</h2>

      <p>
        sometimes i sign my writing with &quot;verify on
        charlottezhuang.org&quot;. you can check the authenticity of those
        messages here.
      </p>

      <i>
        verification is done by hash and will fail if even a single character is
        incorrect
      </i>

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
                unknown
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
