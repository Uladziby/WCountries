import { IContinents, ICountry } from './../interfaces/interfaces';
export class ContinentsService {
  public listOfContinents: IContinents[] = [
    { name: 'Europe', id: 1, img: 'dsd' },
    { name: 'Asia', id: 2, img: 'dsd' },
    { name: 'Africa', id: 3, img: 'dsd' },
    { name: 'Oceania', id: 4, img: 'dsd' },
    { name: 'America', id: 5, img: 'dsd' },
  ];
  constructor() {}

}
