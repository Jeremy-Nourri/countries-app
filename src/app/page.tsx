import CountryCard from "@/components/CountryCard";
import DropdownElement from "@/components/ui/DropdownElement";
import fetchAllCountries from "@/services/fetchAllCountries";

export default async function Home() {

  const countriesData = await fetchAllCountries()

  return (
    <main>
      <DropdownElement
        Parent="Filter by region"
        li={[
          <li key="1">Africa</li>,
          <li key="2">Americas</li>,
          <li key="3">Asia</li>,
          <li key="4">Europe</li>,
          <li key="5">Oceania</li>,
        ]}
      />
      <div className="flex flex-wrap justify-around items-center">
        {countriesData.map((country, index) => (

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
