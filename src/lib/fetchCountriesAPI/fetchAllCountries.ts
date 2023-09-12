import { ShortPresentation } from "@/types/ShortPresentation";

export default async function fetchAllCountries(): Promise<ShortPresentation[]> {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,subregion");

    const countriesData: ShortPresentation[] = await response.json();

    return countriesData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

