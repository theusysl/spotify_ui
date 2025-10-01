import Image from "next/image";

interface LibraryItemProps {
  type: "playlist" | "album" | "artist";
  name: string;
  cape: string;
  author?: string;
}

const typeLabels = {
  playlist: "Playlist",
  album: "Álbum",
  artist: "Artista",
} as const;

export function LibraryItem({ type, name, cape, author }: LibraryItemProps) {
  return (
    <div className="p-2 hover:bg-white/10 cursor-pointer rounded-md flex flex-row gap-2 items-center">
      <Image
        src={cape}
        alt={`Capa de ${name}`}
        width={50}
        height={50}
        className={`aspect-square object-cover ${
          type === "artist" ? "rounded-full" : "rounded-md"
        }`}
      />
      <div className="flex flex-col px-1 overflow-hidden">
        <h4 className="text-base font-medium truncate">{name}</h4>
        <div className="flex flex-row items-center text-sm font-medium text-neutral-400 truncate">
          <span>{typeLabels[type]}</span>
          {type !== "artist" && author && <span className="mx-1">•</span>}
          {author && <span className="truncate">{author}</span>}
        </div>
      </div>
    </div>
  );
}

export default LibraryItem;