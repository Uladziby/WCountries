export interface IContinents {
  name: string;
  img: string;
  id: number;
}

export interface ICountry {
  name: {
    common: string;
  };
  currencies: {
    string: {
      name: 'South Korean won';
      symbol: '₩';
    };
  };
  languages: {};
  population: number;
  maps: {
    googleMaps: string;
  };
  flags: {
    png: string;
    svg: string;
  };
}
