import { Play } from "lucide-react";
import React from "react";
import clsx from "clsx";

interface PlayItemProps {
  size?: "small" | "big";
}

export function PlayItem({ size = "small" }: PlayItemProps) {
  return (
    <button
      className={clsx(
        "absolute bottom-2 right-2 rounded-full bg-green-400 flex items-center justify-center transition-all duration-300 hover:scale-105 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer shadow-lg",
        size === "small" ? "w-8 h-8" : "w-12 h-12"
      )}
    >
      <Play
        size={size === "small" ? 18 : 22}
        className={clsx(
          "text-black",
          size === "big" && "ml-[2px]" // corrige alinhamento visual
        )}
        fill="true"
      />
    </button>
  );
}

export default PlayItem;