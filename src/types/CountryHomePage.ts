export interface Name {
  common: string;
}

export interface Flag {
  svg: string;
}

export interface CountryHomePage {
  name: Name;
  flags: Flag;
  region: string;
  subregion: string;
}