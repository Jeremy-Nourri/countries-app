import { ShortPresentation } from "@/types/ShortPresentation";
import CountryShortCard from "./CountryShortCard"

export default function Countries ({ countries }: { countries: ShortPresentation[] }) {
  return (
    <>
      {countries.map((country, index) => (
        <CountryShortCard
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

