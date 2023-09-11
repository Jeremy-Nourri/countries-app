import Countries from "@/components/Countries";
import DropdownElement from "@/components/ui/DropdownElement";
import fetchAllCountries from "@/lib/fetchCountriesAPI/fetchAllCountries";

import Link from "next/link";

export default async function Home() {

  const countriesData = await fetchAllCountries()

  return (
    <main>
      <DropdownElement
        Parent="Filtered by continent"
        li={[
          <li key="1">
            <Link href="/region/africa">
              Africa
            </Link>
          </li>,
          <li key="2">
            <Link href="/region/americas">
              Americas
            </Link>
          </li>,
          <li key="3">
            <Link href="/region/asia">
              Asia
            </Link>
          </li>,
          <li key="4">
            <Link href="/region/europe">
              Europe
            </Link>
          </li>,
          <li key="5">
            <Link href="/region/oceania">
              Oceania
            </Link>
          </li>,
        ]}
      />

      <div className="flex flex-wrap justify-around items-center">
        <Countries countries={countriesData} />
      </div>
    </main>

  )
}

    