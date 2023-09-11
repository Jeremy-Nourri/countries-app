import { CountryRegion } from "@/types/CountryRegion";

export default async function fetchCountriesByRegion(): Promise<CountryRegion[]> {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=region;subregion");

    const countriesData: CountryRegion[] = await response.json();

    return countriesData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}