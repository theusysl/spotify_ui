import Image from "next/image";

interface VideoProps {
    name: string;
    artist: string;
    thumbnail: string;
    explicit?: boolean;
}

export function Video({ name, artist, thumbnail }: VideoProps) {
    return (
        <div className="bg-transparent hover:bg-white/10 cursor-pointer p-2 rounded-lg w-xl flex flex-col">
            <Image
                src={thumbnail}
                alt="Thumbnail do vídeo"
                width={320}
                height={180}
                className="rounded-lg"
            />
            <h4 className="text-base font-semibold mt-1">
                {name}
            </h4>
            <div className="flex flex-row items-center">
                <div>
                    {true && <span className="text-xs font-bold bg-neutral-400 text-black px-1.25 py-0.5 rounded-sm mr-2">E</span>}
                </div>
                <h5 className="text-sm font-medium text-neutral-400">
                    {artist}
                </h5>
            </div>
        </div>
    )
}

export default Video;