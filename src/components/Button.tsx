import { LucideIcon } from "lucide-react"
import clsx from "clsx"

interface ButtonProps {
  icon: LucideIcon
  variant?: "primary" | "secondary"
  iconSize?: number // tamanho em px do ícone
  buttonSize?: number // tamanho em px do botão
}

export function Button({ icon: Icon, variant = "primary", iconSize = 20, buttonSize = 36 }: ButtonProps) {
  return (
    <button
      style={{ width: buttonSize, height: buttonSize }}
      className={clsx(
        "p-2 rounded-full flex items-center justify-center cursor-pointer transition-colors",
        variant === "primary" && "bg-white/5 hover:bg-white/10",
        variant === "secondary" && "bg-transparent hover:bg-white/5"
      )}
    >
      <Icon size={iconSize} />
    </button>
  )
}

export default Button
