import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

  readonly TECHNICAL = 1;
  readonly NON_TECHNICAL = 2;
  readonly OTHER_TYPE = 3;
  readonly BEGINNER = 1;
  readonly INTERMEDIATE = 2;
  readonly ADVANCED = 3;

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


  users = [];
  cur_user = null;

  constructor(public http: HttpClient) {

    this.users = [
      { id: 1, name: "Alex", role: "organizer", email: "alex@equithon.org", pass: "alextest", attended: [], participated: [], eaten: [] },
      { id: 2, name: "Meagan", role: "organizer", email: "meagan@equithon.org", pass: "meagantest", attended: [], participated: [], eaten: [] },
      { id: 3, name: "Falah", role: "organizer", email: "falah@equithon.org", pass: "falahtest",  attended: [], participated: [], eaten: [] }
    ];

    for(var i = 0; i < this.users.length; i++){
      for(var w = 0; w < this.workshops.length; w++) this.users[i].attended.push(false);
      for(var a = 0; a < this.activities.length; a++) this.users[i].participated.push(false);
      for(var m = 0; m < this.meals.length; m++) this.users[i].eaten.push(false);
    }
  }

  searchUsers(search_by: string = "", query_term: string = ""){
    
    if(query_term){
      if(search_by === "id") {
        console.log("searching by user id %s", query_term);
        return this.users.filter((user) => {
          return user.id === Number(query_term);
        });
      } else if(search_by === "name"){
        console.log("searching by user name %s", query_term);
        return this.users.filter((user) => {
          return user.name.toLowerCase().indexOf(query_term.toLowerCase()) > -1;
        });
      } else if(search_by === "role"){
        console.log("searching by user role %s", query_term);
        return this.users.filter((user) => {
          return user.role.indexOf(query_term.toLowerCase()) > -1;
        });
      }
    } else { // return all users
      console.log("searching with no query");
      return this.users;
    }

  }

  addUser(id, name, role, email, pass){
    let new_user = {
      id: id,
      name: name,
      email: email,
      pass: pass,
      role: role,
      attended: [],
      participated: [],
      eaten: []
    }
    for(var w = 0; w < this.workshops.length; w++) new_user.attended.push(false);
    for(var a = 0; a < this.activities.length; a++) new_user.participated.push(false);
    for(var m = 0; m < this.meals.length; m++) new_user.eaten.push(false);

    this.users.push(new_user);

  }

  updateUser(some_user_id, some_user){
    let user_indx = -1;
    for(var i = 0; i < this.users.length; i++){
      if(this.users[i].id === some_user_id){
        user_indx = i;
        break;
      }
    }
    if(user_indx > -1) this.users[user_indx] = some_user;
  }

  logIn(login_email, login_password){
    let user_indx = -1;
    for(var i = 0; i < this.users.length; i++){
      if(this.users[i].email === login_email){
        user_indx = i;
        break;
      }
    }
    if(user_indx > -1 ) console.log("inputted pass: %s\nactual pass: %s", login_password, this.users[user_indx].pass);
    if(user_indx > - 1 && this.users[user_indx].pass === login_password){
      console.log("successfully logged in!");
      this.cur_user = this.users[user_indx];
      return true;
    }
    console.log("there was an error logging in.");
    return false;
  }

  getCurUser(){
    return this.cur_user;
  }
  
}
