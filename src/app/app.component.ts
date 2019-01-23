import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KegTapTrackApp';
  kegList: Keg[] = [
   new Keg("10 Barrel", "Apocalypse", 250, 6.80),
   new Keg("Anthem", "Pear Cider", 220, 5.50),
   new Keg("BUOY", "IPA", 250, 7.50),
   new Keg("Coors", "Light", 170, 4.20),
   new Keg("Lagunitas", "Sucks", 250, 8.0),
  ];
  selectedKeg = null;
  pour = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
    this.pour = null;
  }

  createKeg(){
    this.kegList.push(new Keg("", "", 0, 0));
  }

  finishedEditing(){
  this.selectedKeg = null;
  this.pour = null;
  }

  pourOneOutForTheHomies(clickedKeg){
    this.pour = "pouring";
    this.selectedKeg = clickedKeg;
    this.selectedKeg.pourABeer();
  }

}
}
