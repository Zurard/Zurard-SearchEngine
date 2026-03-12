"use client";
import { useState } from "react";
import { SearchBar } from "./components/searchBar";

export default function Home() {
  const [query, setQuery] = useState("");

  const handleSearch = (e : React.FormEvent<HTMLButtonElement>) => {
    // we need to search the whatever is there in the search bar using the backend api  
    console.log("Searching for: ", query);

  }



  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black p-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
   
      <div className="relative z-10 flex justify-center mb-12">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">Zurion</h1>
      </div>
      <div className="relative z-10 flex justify-center items-center">
      <div className="flex gap-2 w-full max-w-md">
         <SearchBar  />
      </div>
      </div>
    </div>
  );
}
