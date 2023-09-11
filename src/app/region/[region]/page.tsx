import fetchCountriesByRegion from "@/services/fetchCountriesByRegion"
import CountryCard from "@/components/CountryCard"

export default async function Page({ params }: { params: { region: string } }) {

  const { region } = params

  const countriesByRegion = await fetchCountriesByRegion(region)

  return (
    <main className="flex flex-col items-center">
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