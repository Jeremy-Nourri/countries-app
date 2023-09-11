import { CountryHomePage } from "@/types/CountryHomePage";

export default async function fetchAllCountries(): Promise<CountryHomePage[]> {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,subregion");

    const countriesData: CountryHomePage[] = await response.json();

    return countriesData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

