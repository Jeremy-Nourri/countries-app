import Link from "next/link"
import { Suspense } from "react"
import fetchCountryByName from "@/lib/fetchCountriesAPI/fetchCountryByName"
import CountryFullCard from "@/components/CountryFullCard"



export default async function Country({ params }: { params: { country: string } }) {

  const { country } = params

  const data = await fetchCountryByName(country)

  return (

    <main className="flex flex-col items-center">
      <Link href="/">
        Back
      </Link>
      <Suspense fallback={<p>Loading feed...</p>}>
        <CountryFullCard  data={data} />
      </Suspense>
    </main>

  )
}
