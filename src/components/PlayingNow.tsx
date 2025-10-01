import React from "react";
import { Button } from "./Button";
import { CirclePlus, Ellipsis, Maximize2, } from "lucide-react";
import Image from "next/image";
import AddToPlaylist from "./AddToPlaylist";
import Video from "./Video";

function PlayingNow() {
  return (
    <aside className="flex flex-col rounded-lg w-5/20 bg-neutral-900 p-2">
      <div className="flex flex-row text-md font-semibold p-2">
        <h3 className="my-auto hover:decoration-1">Broken Hearts 3</h3>
        <div className="flex flex-row gap-2 ml-auto">
          <Button icon={Ellipsis} variant="secondary" />
          <Button icon={Maximize2} variant="secondary" iconSize={14} />
        </div>
      </div>
      <a href="" className="block m-2">
        <Image src="/broken_hearts_3.jpg" width={200} height={200} alt="Capa do álbum" className="rounded-xl w-full" />
      </a>
      <div className="flex flex-row items-center p-2">
        <div>
          <h2 className="text-2xl font-bold">soooo high</h2>
          <h4 className="text-base font-semibold text-neutral-400">Destroy Lonely</h4>
        </div>
        <div className="ml-auto gap-4 flex flex-row">
          <AddToPlaylist variant="added" />
        </div>
      </div>
      <div>
        <h4 className="text-base font-semibold p-2" >Vídeoclipes Relacionados</h4>
        <div className="flex flex-row overflow-y-auto max-h-96">
          <Video name="If Looks Could Kill" artist="Destroy Lonely" thumbnail="/thumb_if_looks_could_kill.jpg" explicit />
          <Video name="Digits" artist="Young Thug" thumbnail="/thumb_digits.jpg" explicit />
        </div>
      </div>
    </aside>
  )
}

export default PlayingNow;