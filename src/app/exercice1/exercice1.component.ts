import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public myCity: string = "LYON";
  public myLink: string ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lyon-Paysages.jpg/392px-Lyon-Paysages.jpg";
  public myButtonName: string = "Click me!"


  myClick(){
    this.myButtonName = "This was event with ()";
  }
  constructor() { }

  ngOnInit() {
  }

}
