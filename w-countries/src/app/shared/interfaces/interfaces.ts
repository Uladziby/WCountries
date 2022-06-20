export interface IContinents {
  name: string;
  img: string;
  id: number;
}


export interface ICountry {
  name: {
    common: string;
    official : string;
  };
  capital : string;
  currencies: {
    'EUR': {
      name: string;
      symbol: string;
    };
  };
  languages: {};
  population: number;
  map: {
    googleMaps: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  borders: String[];
  subregion: string;
}
