import { CountryNameFr } from "@/types/CountryNameFr";

export default async function fetchCountriesNameFr(): Promise<string[]> {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=translations");


    const countriesData: CountryNameFr[] = await response.json();
    
    const validCountriesData = countriesData.filter(
      country => country.translations && country.translations.fra
    );

    const commonNames: string[] = validCountriesData.map(country => country.translations.fra.common);

    return commonNames;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
