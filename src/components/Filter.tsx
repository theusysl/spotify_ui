interface FilterProps {
    name: string;
}

export function Filter({name}: FilterProps) {
  return(
    <div className="text-sm font-semibold rounded-full w-fit py-1.5 px-3.5 bg-white/10 hover:bg-white/20 cursor-pointer">
      {name}
    </div>
    )
}

export default Filter;