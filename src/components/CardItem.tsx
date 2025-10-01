import React from "react";
import Image from "next/image";
import PlayItem from "./PlayItem";

interface CardItemProps {
    type: "playlist" | "album" | "artist";
    name: string;
    cape: string;
    author?: string;
    description?: string;
}

export function CardItem({ type, name, cape, author, description }: CardItemProps) {
  return (
    <div className="w-47 h-fit p-3 hover:bg-white/5 cursor-pointer rounded-md flex flex-col group">
      <div className="relative">
        <Image
          src={cape}
          alt={`Capa de ${name}`}
          width={164}
          height={164}
          className={`aspect-square object-cover ${
          type === "artist" ? "rounded-full" : "rounded-md"
          }`}
        />
        <PlayItem size="big" />
      </div>
      <h4 className="pt-2">{name}</h4>
      <h5 className="pt-1 text-sm text-neutral-400">{author}</h5>
      <h5 className="pt-1 text-sm text-neutral-400">{description}</h5>
    </div>
  )
}

export default CardItem;