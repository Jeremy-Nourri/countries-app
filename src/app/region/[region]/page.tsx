import Link from "next/link"

import fetchCountriesByRegion from "@/lib/fetchCountriesAPI/fetchCountriesByRegion"
import CountryShortCard from "@/components/CountryShortCard"
import DropdownElement from "@/components/ui/DropdownElement"

export default async function Region({ params }: { params: { region: string } }) {

  const { region } = params

  const countriesByRegion = await fetchCountriesByRegion(region)

  const subregions = [...new Set(countriesByRegion.map(country => country.subregion))]


  return (
    <main className="flex flex-col items-center">

      <DropdownElement
        Parent="Filtered by subregion"
        li={subregions.map((subregion, index) => (
          <li key={index}>
            <Link href={`/region/${region}/${subregion}`}>
              {subregion}
            </Link>
          </li>
        ))}
      />

      <h2 className="w-4/5 py-3 rounded-md uppercase bg-secondary text-white text-lg font-bold text-center" >
        {region}
      </h2>
      <div className="flex flex-wrap justify-around">

        {countriesByRegion.map((country, index) => (
          <CountryShortCard
            key={index}
            name={country.name}
            flags={country.flags}
            region={country.region}
            subregion={country.subregion}
          />
        ))}
      </div>
    </main>
  )
}