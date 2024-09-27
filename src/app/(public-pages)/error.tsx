"use client";

import ErrorPageComp from "@/components/ErrorPageComp";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorPageComp clickHandler={() => reset()} />;
}
