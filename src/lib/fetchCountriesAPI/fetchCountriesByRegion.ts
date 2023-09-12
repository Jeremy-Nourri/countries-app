import { ShortPresentation } from "@/types/ShortPresentation";

export default async function fetchCountriesByRegion(region: string): Promise<ShortPresentation[]> {

  try {
    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);

    const countries: ShortPresentation[] = await response.json();
    const countriesData = countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

    return countriesData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}