"use client";
import Header from "@/components/Header";
import MagicButton from "@/components/MagicButton";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <>
      <div className="w-full flex justify-center mb-5">
        <Header />
      </div>
      <div
        className="px-5"
        style={{
          width: "100%",
          margin: "30% 0px",
          maxWidth: "400px",
          margin: "auto",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, 30%)",
        }}
      >
        <h1 className="main-text mb-8">
          AI
          <br />
          Image
          <br />
          Generator
        </h1>
        <SearchBar />
        <div className="w-full flex justify-center">
          <MagicButton />
        </div>
      </div>
    </>
  );
}
