import NavBar from "./NavBar"

export default function Header() {
  return (
    <header className="flex flex-col justify-evenly items-center ">
      <h1 className="py-4 text-lg font-bold">Where in the world?</h1>
      <NavBar />      
    </header>
  )
}