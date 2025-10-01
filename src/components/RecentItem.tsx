import Image from "next/image";
import PlayItem from "./PlayItem";

interface RecentItemProps {
  name: string;
  cape: string;
}

export function RecentItem({ name, cape }: RecentItemProps) {
  return (
    <div className="bg-white/10 hover:bg-white/20 cursor-pointer rounded-md flex flex-row gap-2 items-center group relative">
      
      <Image
        src={cape}
        alt={`Capa de ${name}`}
        width={50}
        height={50}
        className="aspect-square object-cover rounded-md"
      />

      <h4 className="px-2 text-sm font-semibold truncate">{name}</h4>

      <PlayItem size="small" />

    </div>
  );
}


export default RecentItem;