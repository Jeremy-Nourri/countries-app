import Link from "next/link"
import DropdownElement from "../ui/DropdownElement"

export default function NavBar() {

  return (
    <nav className="flex justify-center items-center">
      <Link href="/">
        Home
      </Link>
    </nav>

    
  )
}