import { CountryHomePage } from "@/types/CountryHomePage"
import CountryCard from "./CountryCard"

export default function Countries ({ countries }: { countries: CountryHomePage[] }) {
  return (
    <>
      {countries.map((country, index) => (
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

