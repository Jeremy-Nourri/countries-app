import Image from "next/image"
import { CountryHomePage } from "@/types/CountryHomePage"

export default function CountryCard(
  {
    name,
    flags,
    region,
    subregion,
  }: CountryHomePage) {

  return (
    <div className="w-4/5 my-4 flex flex-col justify-center items-center p-10 rounded-lg shadow-lg bg-gray-100">

      <Image
        src={flags.svg}
        alt={name.common}
        width={500}
        height={500}
        className="w-auto h-36"
      />
      <div className="mt-4 flex flex-col items-center text-center">
        <h2 className="text-lg font-semibold">{name.common}</h2>
        <p>Continent : <span className="text-primary">{region}</span></p>
        <p>Subregion : <span className="text-primary">{subregion}</span></p>
        <div className="card-actions mt-4">
          <button className="btn btn-primary">See more</button>
        </div>
      </div>
    </div>
  )
}