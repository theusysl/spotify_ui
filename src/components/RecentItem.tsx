import Image from "next/image";

interface RecentItemProps {
  name: string;
  cape: string;
}

export function RecentItem({ name, cape }: RecentItemProps) {
  return (
    <div className="p-2 hover:bg-white/10 cursor-pointer rounded-md flex flex-row gap-2 items-center aspect-square object-cover">
      <Image
        src={cape}
        alt={`Capa de ${name}`}
        width={50}
        height={50}
      />
      <h4 className="text-base font-semibold truncate">{name}</h4>
    </div>
  );
}


export default RecentItem;