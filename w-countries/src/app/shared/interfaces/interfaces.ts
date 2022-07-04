export interface AppState {
  main: FeatureMain;
  isFetching: boolean;
}
export interface FeatureMain {
  region: string;
  countries: ICountry[];
  detail: ICountry;
}
export interface IContinents {
  name: string;
  img: string;
  id: number;
}

type Lang = {
  [key : string]:string;
}
export interface ICountry {
  name: {
    common: string;
    official: string;
  };
  capital: string;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: Lang;
  population: number;
  map: {
    googleMaps: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  area: number;
  borders: String[];
  subregion: string;
}

export interface IServicePhotos {
  photos : IPhoto[]
}

export interface IPhoto {
  url: string,
  src : {
    original: string;
  }
}