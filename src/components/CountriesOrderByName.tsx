import { CountryHomePage } from "@/types/CountryHomePage"
import CountryCard from "./CountryCard"

export default function CountriesOrderByName ({ countries }: { countries: CountryHomePage[] }) {
  
  const countriesSortedByName = countries.sort((a, b) => {
    if (a.name.common > b.name.common) {
      return 1
    }
    if (a.name.common < b.name.common) {
      return -1
    }
    return 0
  })

  return (
    <>
      {countriesSortedByName.map((country, index) => (
        <CountryCard
          key={index}
          name={country.name}
          flags={country.flags}
          region={country.region}
          subregion={country.subregion}
        />
      ))}
    </>
  )
}
