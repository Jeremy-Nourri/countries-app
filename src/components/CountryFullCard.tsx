import Image from "next/image"
import { FullPresentation } from "@/types/FullPresentation"


export default function CountryFullCard({ data }: { data: FullPresentation }) {

  const { name, flags, region, subregion, currencies, population, maps, independent, unMember, capital, languages } = data

  const currencyName = Object.values(currencies).map((currency) => currency.name);

  const listLanguages = Object.values(languages).join(", ");

  return (
    <div className="w-4/5 my-4 flex flex-col justify-center items-center p-6 rounded-lg shadow-lg bg-gray-100">

      <Image
        src={flags.svg}
        alt={name.common}
        width={500}
        height={500}
        className="w-auto h-36"
      />
      <h2 className="my-2 text-xl font-bold">{name.common}</h2>
      <div className="flex flex-col">

        <p className="my-1"><span className="text-primary font-bold">Continent :</span> {region}</p>
        <p className="my-1"><span className="text-primary font-bold">Subregion :</span> {subregion}</p>
        <p className="my-1"><span className="text-primary font-bold">Capital :</span> {capital}</p>
        <p className="my-1"><span className="text-primary font-bold">Population :</span> {population}</p>
        <p className="my-1"><span className="text-primary font-bold">Currency :</span> {currencyName}</p>
        <p className="my-1"><span className="text-primary font-bold">Languages :</span> {listLanguages}</p>
        <p className="my-1"><span className="text-primary font-bold">Independence :</span> {independent ? "Yes" : "No"}</p>
        <p className="my-1"><span className="text-primary font-bold">UN Member :</span> {unMember ? "Yes" : "No"}</p>
        
      </div>
    </div>
  )
}