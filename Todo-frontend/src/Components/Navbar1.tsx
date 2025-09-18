import { Link } from "react-router-dom"
import { Mode } from "../ui/Mode"
import { Menu, UserRound } from "lucide-react"

export const Navbar1 = () => {
    return(
    <div className="w-full py-4 px-4">
      <div className="container flex items-center justify-between">
        {/* Left: hamburger */}
        <button
          aria-label="Open menu"
          className="bg-[#625E5E] inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface text-surface-foreground/80 shadow-sm ring-1 ring-border hover:opacity-90"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Center: address bar with brand */}
        <div className="flex-1 px-4">
          <div className="bg-[#625E5E] mx-auto max-w-xl rounded-full bg-surface text-center text-surface-foreground/90 ring-1 ring-border">
            <Link to="/" className="block px-6 py-3 text-lg font-medium tracking-wide">
              TodoApp
            </Link>
          </div>
        </div>

        {/* Right: user + theme */}
        <div className="flex items-center gap-3">
          <Mode/>
          <button
            aria-label="Account"
            className="bg-[#625E5E] inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface text-surface-foreground/80 ring-1 ring-[color:var(--ring)]"
          >
            <UserRound className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
    )
}