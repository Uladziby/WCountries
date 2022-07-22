import { IContinents, ICountry } from './../interfaces/interfaces';

export class ContinentsService {
  public listOfContinents: IContinents[] = [
    { name: 'Europe', id: 1, img: '../../../assets/europe.jpg'},
    { name: 'Asia', id: 2, img: "https://i.pinimg.com/564x/5b/8b/80/5b8b807ec997618221a663fd723c1924.jpg" },
    { name: 'Africa', id: 3, img: 'https://i.pinimg.com/originals/3f/97/74/3f97741cf8f9c946fbc7c9fbc71705e3.jpg' },
    { name: 'Oceania', id: 4, img: '../../../assets/oceania.jpg' },
    { name: 'America', id: 5, img: '../../../assets/snamerica2.jpg' },
  ];
  constructor() {}
}
