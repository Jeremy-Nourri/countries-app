import { ShortPresentation } from './ShortPresentation';

export interface FullPresentation extends ShortPresentation {
  capital: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  population: number;
  independent: boolean;
  unMember: boolean;
  maps: {
    openStreetMaps: string;
  };
}