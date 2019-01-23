class Keg {
  public poursRemaining : number  = 124;
  public percentBeerRemaining : number = 0;
  constructor(public beerBrand: string, public beerName: string , public price: number, public alcByVolume: number){

  }

  pourABeer(){
    this.poursRemaining--;
  }

  percentRemaining(){     
    return this.poursRemaining/124*100;
  }
}

export { Keg }
