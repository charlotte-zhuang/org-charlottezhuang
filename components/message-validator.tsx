"use client";

import validateMessage from "@/api/validate-message";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useMemo, useState } from "react";
import { BadgeCheckIcon, BadgeXIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MessageValidator() {
  const [message, setMessage] = useState("");
  const isValid = useMemo(() => validateMessage(message), [message]);

  return (
    <div className="flex flex-col gap-2 items-center sm:items-start">
      <h2 className="text-md font-bold">Message Validator</h2>
      <p>authenticate that i wrote something.</p>
      <p>
        this form checks the hash of the contents against a list of known
        hashes.
      </p>

      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="paste the entire message here"
      />

      {message.length > 0 && (
        <Badge
          variant="secondary"
          className={cn(
            "text-white",
            isValid
              ? "bg-blue-500 text-white dark:bg-blue-600"
              : "bg-red-500 text-white dark:bg-red-600"
          )}
        >
          {isValid ? (
            <>
              <BadgeCheckIcon />
              valid
            </>
          ) : (
            <>
              <BadgeXIcon />
              invalid
            </>
          )}
        </Badge>
      )}
    </div>
  );
}
