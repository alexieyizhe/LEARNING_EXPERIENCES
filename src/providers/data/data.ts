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

  readonly ORGANIZER = 0;
  readonly MENTOR = 1;
  readonly SPONSOR = 2;
  readonly VOLUNTEER = 3;
  readonly HACKER = 4;

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

  actions = [
    // defaults
    {action: "organizing Equithon!", need_secondary: null, available_to: [true, false, false, false, false] },
    {action: "able to answer questions!", need_secondary: null, available_to: [true, true, true, false, false] },
    {action: "volunteering!", need_secondary: null, available_to: [true, false, false, true, false] },
    {action: "working on my project!", need_secondary: null, available_to: [false, false, false, false, true] },
    
    // non-specific statuses
    {action: "just hanging out!", need_secondary: null, available_to: [true, true, true, true, true] },
    {action: "taking a much needed break...zzz...", need_secondary: null, available_to: [true, true, true, true, true] },
    {action: "eating some tasty food!", need_secondary: null, available_to: [true, true, true, true, true] },
    {action: "dealing with a problem :/", need_secondary: null, available_to: [true, true, false, false, false] },
    
    // custom specific statuses
    {action: "helping out at ", need_secondary: "event", available_to: [true, true, true, true, false] },
    {action: "chillin' at ", need_secondary: "event", available_to: [true, true, true, true, true] },
    {action: "answering questions about ", need_secondary: "input", available_to: [true, true, true, false, false] },
  ]


  users = [];
  cur_user = null;  // info: a user; quickci: an event
                          // ^^ allows current user (if volunteer) to quickly check ppl in
  constructor(public http: HttpClient) {

    // -------------- SEED DATA --------------------------------
    this.users = [
      { id: 1, name: "Alex", avatar: "profpic_alex.jpg", 
        email: "alex@equithon.org", pass: "alextest", 
        role: this.ORGANIZER, status: {action: this.ORGANIZER, at_event: null }, 
        attended: [], participated: [], eaten: [], 
        scan_stats: { quick: true, quick_evnt: this.meals[1], amt: 3 } },

      { id: 2, name: "Meagan", avatar: "profpic_meagan.jpg", 
        email: "meagan@equithon.org", pass: "meagantest", 
        role: this.ORGANIZER, status: {action: this.ORGANIZER, at_event: null }, 
        attended: [], participated: [], eaten: [], 
        scan_stats: { quick: true, quick_evnt: this.activities[1], amt: 55 } },

      { id: 3, name: "Andres", avatar: "profpic_andres.jpg", 
        email: "andres@equithon.org", pass: "andrestest", 
        role: this.ORGANIZER,  status: {action: this.ORGANIZER, at_event: null }, 
        attended: [], participated: [], eaten: [], 
        scan_stats: { quick: false, quick_evnt: null, amt: 12 } },

      { id: 4, name: "Falah", avatar: "profpic_falah.jpg", 
        email: "falah@equithon.org", pass: "falahtest", 
        role: this.ORGANIZER, status: {action: this.ORGANIZER, at_event: null }, 
        attended: [], participated: [], eaten: [], 
        scan_stats: { quick: false, quick_evnt: null, amt: 36 } },

      { id: 5, name: "Equihacker", avatar: "", 
        email: "hackertest@equithon.org", pass: "hackertest", 
        role: this.HACKER,  status: {action: this.HACKER, at_event: null }, 
        attended: [], participated: [], eaten: [], 
        scan_stats: { quick: false, quick_evnt: null, amt: 0 } },

      { id: 6, name: "Equivolunteer", avatar: "", 
        email: "volunteertest@equithon.org", pass: "volunteertest", 
        role: this.VOLUNTEER, status: {action: this.VOLUNTEER, at_event: null }, 
        attended: [], participated: [], eaten: [], 
        scan_stats: { quick: false, quick_evnt: null, amt: 67 } },

      { id: 7, name: "Equimentor", avatar: "", 
        email: "mentortest@equithon.org", pass: "mentortest", 
        role: this.MENTOR, status: {action: this.MENTOR, at_event: null }, 
        attended: [], participated: [], eaten: [], 
        scan_stats: { quick: false, quick_evnt: null, amt: 0 } },

      { id: 8, name: "Equisponsor", avatar: "", 
        email: "sponsortest@equithon.org", pass: "sponsortest", 
        role: this.SPONSOR, status: {action: this.SPONSOR, at_event: null }, 
        attended: [], participated: [], eaten: [], 
        scan_stats: { quick: false, quick_evnt: null, amt: 0 } }

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
          return user.role === Number(query_term);
        });
      }
    }
    // no search filter: return all users
    console.log("searching with no query");
    return this.users;

  }

  addUser(id, name, role, email, pass){
    let new_user = {
      id: id,
      name: name,
      email: email,
      pass: pass,
      role: Number(role),
      status: {action: Number(role), at_event: null}, // set status to default for the user's role
      attended: [],
      participated: [],
      eaten: [],
      scanned: 0
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

  changeStatus(new_action, new_sec_event){
    this.cur_user.status.action = new_action;
    this.cur_user.status.at_event = new_sec_event;
    if(this.cur_user.role === this.ORGANIZER || this.cur_user.role === this.VOLUNTEER){
      // ask user if they want to turn on quick checkin using a modal
    }
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

  logOut(){
    this.cur_user = null;
  }

  /*
  optQuickCheckin(opt_in){ // cur_user needs to be non-null
    if(opt_in){

      for(let w = 0; w < this.workshops.length; w++){
        if(this.workshops[w].name.toLowerCase() === this.cur_user.acting_on){
          this.cu_is_quick = true;
          this.cu_quick_checkin = {
            type: 'workshop',
            name: this.workshops[w].name,
            type_indx: w
          };
          console.log("setting %s as quick checkin", this.workshops[w].name);
          return this.cu_quick_checkin;
        }
      }

      for(let a = 0; a < this.activities.length; a++){
        if(this.activities[a].name.toLowerCase() === this.cur_user.acting_on){
          this.cu_is_quick = true;
          this.cu_quick_checkin = {
            type: 'activity',
            name: this.activities[a].name,
            type_indx: a
          };
          console.log("setting %s as quick checkin", this.activities[a].name);
          return this.cu_quick_checkin;
        }
      }

      for(let m = 0; m < this.meals.length; m++){
        if(this.meals[m].name.toLowerCase() === this.cur_user.acting_on){
          this.cu_is_quick = true;
          this.cu_quick_checkin = {
            type: 'meal',
            name: this.meals[m].name,
            type_indx: m
          };
          console.log("setting %s as quick checkin", this.meals[m].name);
          return this.cu_quick_checkin;
        }
      }

    }
    console.log("did not find one matching current");
    this.cu_is_quick = false;
    this.cu_quick_checkin = null;

    return null;
  }*/
  
}
