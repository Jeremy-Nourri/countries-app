import NavBar from "../NavBar"

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Where in the world?</h1>
      <NavBar />      
    </header>
  )
}