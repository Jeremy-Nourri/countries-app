export interface Name {
  common: string;
}

export interface Flags {
  svg: string;
}

export interface CountryHomePage {
  name: Name;
  flags: Flags;
  region: string;
  subregion: string;
}