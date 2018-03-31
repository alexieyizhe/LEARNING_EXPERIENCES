import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  // get rid of this later
  readonly TECHNICAL = 1;
  readonly NON_TECHNICAL = 2;
  readonly OTHER_TYPE = 3;
  readonly BEGINNER = 1;
  readonly INTERMEDIATE = 2;
  readonly ADVANCED = 3;

  user;
  editable: boolean = false;

  // get rid of this later
  workshops = [
    {name: "Programming Fundamentals", location: "QNC 2506", time: "10:30", duration: 60, type: this.TECHNICAL, level: this.BEGINNER, spots: 90},
    {name: "Intro to Web Dev", location: "QNC 2507", time: "10:30", duration: 60, type: this.TECHNICAL, level: this.BEGINNER, spots: 65},
    {name: "Intro to Android Dev", location: "QNC 2506", time: "11:30", duration: 60, type: this.TECHNICAL, level: this.BEGINNER, spots: 65},
    {name: "Intro to iOS Dev", location: "QNC 2507", time: "11:30", duration: 60, type: this.TECHNICAL, level: this.BEGINNER, spots: 65},
    {name: "Intro to Game Dev", location: "QNC 2506", time: "13:30", duration: 60, type: this.TECHNICAL, level: this.BEGINNER, spots: 65},
    {name: "React & JS Web Dev", location: "QNC 2507", time: "13:30", duration: 60, type: this.TECHNICAL, level: this.INTERMEDIATE, spots: 40},
    {name: "Intermediate Software Dev", location: "QNC 1506", time: "15:30", duration: 60, type: this.TECHNICAL, level: this.INTERMEDIATE, spots: 40},
    {name: "Hardware Meets Software", location: "QNC 2506", time: "15:30", duration: 60, type: this.TECHNICAL, level: this.INTERMEDIATE, spots: 30},
    {name: "Data Science", location: "QNC 1506", time: "1:30", duration: 60, type: this.TECHNICAL, level: this.ADVANCED, spots: 22},
    {name: "Virtual & Augmented Reality", location: "QNC 1506", time: "1:30", duration: 60, type: this.TECHNICAL, level: this.INTERMEDIATE, spots: 19},
    {name: "Intro to UI/UX Design", location: "STC 0040", time: "15:30", duration: 60, type: this.NON_TECHNICAL, level: this.BEGINNER, spots: 50},
    {name: "Developing Your Idea", location: "STC 0010", time: "15:30", duration: 60, type: this.NON_TECHNICAL, level: this.BEGINNER, spots: 50},
    {name: "Pitching Your Idea", location: "STC 0010", time: "17:30", duration: 60, type: this.NON_TECHNICAL, level: this.BEGINNER, spots: 50},
    {name: "Good Health, Good Code", location: "QNC 2506", time: "19:30", duration: 60, type: this.NON_TECHNICAL, level: this.BEGINNER, spots: 30},
    {name: "Build A Team!", location: "STC 0010", time: "21:00", duration: 180, type: this.OTHER_TYPE, level: this.BEGINNER, spots: 150},
  ];
  activities = [
    {name: "Therapy Dogs", location: "STC Concourse", time: "15:30", duration: 60, spots: 30},
    {name: "Minute To Win It!", location: "STC 1035", time: "15:30", duration: 60, spots: 30},
    {name: "Meditation", location: "QNC 1507", time: "19:30", duration: 60, spots: 30},
    {name: "Photo Booth", location: "STC Basement", time: "17:30", duration: 60, spots: 30},
    {name: "Networking Fair", location: "STC 1012", time: "9:15", duration: 60, spots: 30},
    {name: "Hackenger Hunt", location: "Various Locations", time: "18:30", duration: 60, spots: 30}
  ];
  meals = [
    {name: "Shawarma Plus", location: "STC Basement", time: "12:30", duration: 120, spots: 400},
    {name: "Aunty's Kitchen", location: "STC Basement", time: "19:30", duration: 120, spots: 400},
    {name: "The Grill", location: "STC Basement", time: "19:30", duration: 120, spots: 400},
    {name: "Vincenzo's", location: "STC Basement", time: "13:30", duration: 120, spots: 400},
    {name: "Breakfast", location: "STC Basement", time: "8:45", duration: 120, spots: 400},
    {name: "Brunch", location: "STC Basement", time: "10:30", duration: 120, spots: 400}
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
    console.log("%s", navParams.get("user").name);
    this.editable = navParams.get("editable");
    this.user = navParams.get("user");
  }

  ionViewDidLoad() {
    console.log('loaded user page');
    if(this.editable){
      console.log("editable");
      document.getElementById("editable_view").style.display = "inline";
      document.getElementById("default_view").style.display = "none";
    } else {
      console.log("not editable");
    }
  }

  close(){
    this.view.dismiss(this.user);
  }

}
