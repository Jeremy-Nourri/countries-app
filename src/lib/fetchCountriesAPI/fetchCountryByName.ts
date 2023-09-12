import { FullPresentation } from "@/types/FullPresentation";

export default async function fetchCountryByName(): Promise<FullPresentation[]> {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=translations");


    const countryData: FullPresentation[] = await response.json();
    
    return countryData;
  
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
