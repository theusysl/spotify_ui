import { Button } from "./Button";
import { ChevronRight, List, Maximize2, Plus, Search } from "lucide-react";
import Filter from "./Filter";
import LibraryItem from "./LibraryItem";

function Library() {
  return (
    <aside className="flex flex-col p-2 rounded-lg w-3/20 bg-neutral-900">
      <div className="flex flex-row text-md font-semibold py-1 px-2">
        <h3 className="my-auto">Sua Biblioteca</h3>
        <div className="flex flex-row gap-2 ml-auto">
          <Button icon={Plus} />
          <Button icon={Maximize2} variant="secondary" iconSize={14} />
        </div>
      </div>
      <div className="flex flex-row gap-2 p-2">
        <Filter name="Playlists" />
        <Filter name="Artistas" />
        <Button icon={ChevronRight} buttonSize={32} iconSize={32}/>
      </div>
      <div className="flex flex-row gap-2 px-2 items-center mb-2">
        <Button icon={Search} variant="secondary" buttonSize={32} />
        <div className="flex flex-row gap-2 ml-auto items-center">
          <span className="text-sm font-semibold">
            Recentes
          </span>
          <List size={20}/>
        </div>
      </div>
      <div className="flex flex-col">
        <LibraryItem type="album" name="ASTROWORLD" cape="/astroworld.jpg" author="Travis Scott" />
        <LibraryItem type="playlist" name="ritmada transcendental" cape="/davi.jpg" author="theusysl" />
        <LibraryItem type="artist" name="M'DEP" cape="/mdep.jpg" />
        <LibraryItem type="album" name="4x4" cape="/4x4.jpg" author="Mu540" />
        <LibraryItem type="playlist" name="as melhores do oruam" cape="/oruam.jpg" author="menorzin22" />
        <LibraryItem type="artist" name="Mc Kelvinho" cape="/kelvinho.jpg" />
        <LibraryItem type="album" name="More Chaos" cape="/more_chaos.jpg" author="Ken Carson" />
        <LibraryItem type="playlist" name="músicas torcida jovem do santos futebol clube" cape="/santos.jpg" author="Torcida Jovem Oficial" />
        <LibraryItem type="artist" name="Twenty One Pilots" cape="/twenty_one_pilots.jfif" />
      </div>
    </aside>
  )
}

export default Library;