import React from "react";
import CardItem from "./CardItem";

interface HighlightsProps {
    text: string;
    subtext?: string;
}

export function Highlights({ text, subtext }: HighlightsProps) {
  return (
    <div className="flex flex-col py-4">
      {subtext && <p className="px-3 text-xs font-medium text-neutral-400">{subtext}</p>}
      <h3 className="p-3 pt-0 text-2xl font-bold">{text}</h3>
      <div className="flex flex-row overflow-x-auto">
        <CardItem type="album" name="UY SCUTI" cape="/uy_scuti.jpg" author="Young Thug" />
        <CardItem type="album" name="BOEHMIA: SWAG, NOVA, ERA." cape="/boehmia.jpg" author="mavyrmldy" />
        <CardItem type="album" name="CAOS DLX" cape="/caos_dlx.jpg" author="Alee" />
        <CardItem type="album" name="Breach" cape="/breach.jpg" author="Twenty One Pilots" />
      </div>
    </div>
  );
}

export default Highlights;