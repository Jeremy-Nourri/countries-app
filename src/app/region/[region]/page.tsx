import Link from "next/link"

import fetchCountriesByRegion from "@/lib/fetchCountriesAPI/fetchCountriesByRegion"
import CountryCard from "@/components/CountryCard"
import DropdownElement from "@/components/ui/DropdownElement"

export default async function Region({ params }: { params: { region: string } }) {

  const { region } = params

  const countriesByRegion = await fetchCountriesByRegion(region)

  const filteredBySubregion = () => {
    const subregions = countriesByRegion.map(country => country.subregion)
    const listOfSubregions = [...new Set(subregions)]
    return listOfSubregions
  }
    
  const Subregions = filteredBySubregion()

 

  return (
    <main className="flex flex-col items-center">

      <DropdownElement
        Parent="Filtered by subregion"
        li={Subregions.map((subregion, index) => (
          <li key={index}>
            <Link href={`/region/${region}/${subregion}`}>
              {subregion}
            </Link>
          </li>
        ))}
      />

      <h2 className="w-4/5 py-3 rounded-md uppercase bg-secondary text-white text-lg font-bold text-center" >{region}</h2>
      <div className="flex flex-wrap justify-around">

        {countriesByRegion.map((country, index) => (
          <CountryCard
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