import { FullPresentation } from "@/types/FullPresentation";

export default async function fetchCountryByName(name: string): Promise<FullPresentation> {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,flags,region,subregion,capital,currencies,languages,population,independent,unMember,maps`);

    const countryData: FullPresentation[] = await response.json();
    
    return countryData[0];
  
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
