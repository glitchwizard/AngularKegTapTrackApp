class Keg {
  public poursRemaining = 124;
  constructor(public beerBrand: string, public beerName: string , public price: number, public alcByVolume: number){

  }

  pourABeer(){
    this.poursRemaining--;
  }
}

export { Keg }
