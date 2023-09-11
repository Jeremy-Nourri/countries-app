import fetchCountriesByRegion from "@/lib/fetchCountriesAPI/fetchCountriesByRegion"
import CountryCard from "@/components/CountryCard"

export default async function SubRegion({ params }: { params: { region: string, subregion: string } }) {

  const { region, subregion } = params

  const subregionWithoutSpace = subregion.replace(/%20/g, " ")

  const countriesByRegion = await fetchCountriesByRegion(region)

  const countriesBySubregion = countriesByRegion.filter(country => country.subregion === subregionWithoutSpace)

  return (
    <main className="flex flex-col items-center">
      
      <h2 className="w-4/5 py-3 rounded-md uppercase bg-secondary text-white text-lg font-bold text-center" >{subregionWithoutSpace}</h2>
      <div className="flex flex-wrap justify-around">
  
        {countriesBySubregion.map((country, index) => (
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