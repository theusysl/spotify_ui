import clsx from "clsx"
import { Check, CircleMinus, CirclePlus, LucideIcon } from "lucide-react"

interface AddToPlaylistProps {
  variant?: "add" | "remove" | "added"
  size?: number // tamanho em px do ícone
}

export function AddToPlaylist({ variant = "add", size = 32 }: AddToPlaylistProps) {
  let Icon: LucideIcon

  switch (variant) {
    case "remove":
      Icon = CircleMinus
      break
    case "added":
      Icon = Check
      break
    default:
      Icon = CirclePlus
  }

  // tamanho do ícone → menor se for "added"
  const iconSize = variant === "added" ? size * 0.5 : size

  return (
    <button
      className={clsx(
        "flex items-center justify-center rounded-full cursor-pointer transition-transform",
        "h-6 w-6 hover:scale-105", // botão cresce no hover
        variant === "add" && "bg-transparent",
        variant === "added" && "bg-green-400 text-neutral-900",
        variant === "remove" && "bg-transparent"
      )}
    >
      <Icon style={{ width: iconSize, height: iconSize }} />
    </button>
  )
}

export default AddToPlaylist
