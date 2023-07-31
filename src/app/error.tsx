"use client"; // Error components must be Client Components

import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h2 className="text-3xl text-less-dark-brown font-bold">
        Something went wrong!
      </h2>
      <button
        onClick={() => reset()}
        className="mt-2 flex items-center justify-center w-36 h-10 p-2
         text-lg border rounded-lg bg-[#D76B64] text-white hover:bg-opacity-70 focus:outline-none"
      >
        Try again
      </button>
    </div>
  );
}
