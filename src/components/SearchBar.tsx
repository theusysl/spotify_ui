import { Search } from "lucide-react";
import React from "react";

export function SearchBar() {
  return (
    <div className="w-128 p-3 rounded-full bg-white/10 flex flex-row gap-3 items-center">
      <Search />
      <input
        type="text"
        placeholder="O que você quer ouvir?"
        className=" placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white"
      />
    </div>
  );
}

export default SearchBar;