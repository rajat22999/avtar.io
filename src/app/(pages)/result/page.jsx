"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const { default: Image } = require("next/image");

const Result = () => {
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("searchQuery");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="px-5 bg-[#201637]">
      {isLoading && (
        <div className="flex justify-center items-center m-0 h-[100vh] bg-[#201637]">
          <Image src="/animation.gif" alt="my gif" height={100} width={100} />
        </div>
      )}
      {!isLoading && (
        <div className="h-[100vh] bg-[#201637]">
          <div className="flex flex-col	 items-center justify-center top-[10%] relative">
            <h1
              className="text-[24px] mb-[50px] text-center"
              style={{ wordBreak: "break-word" }}
            >
              This is your AI Generated Image for prompt: <br />
              {search}
            </h1>
            <Image
              className="rounded"
              src="/result.webp"
              alt="result image"
              height={400}
              width={400}
            />
            <button
              onClick={() => {
                router.push("/");
              }}
              className="my-[50px] cursor-pointer"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
