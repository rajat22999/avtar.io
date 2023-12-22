"use client";
import Header from "@/components/Header";
import MagicButton from "@/components/MagicButton";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <div className="w-full flex justify-center mb-5">
        <Header />
      </div>
      <div
        className="px-5 pb-[60px]"
        style={{
          width: "100%",
          margin: "30% 0px",
          maxWidth: "550px",
          margin: "auto",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, 20%)",
        }}
      >
        <h1 className="main-text mb-8">
          AI &nbsp;
          <br className="md:hidden" />
          Image &nbsp;
          <br className="md:hidden" />
          Generator
        </h1>
        <SearchBar setSearchQuery={setSearchQuery} />
        <div className="w-full flex justify-center">
          <MagicButton
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </div>
    </>
  );
}
