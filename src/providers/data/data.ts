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

  readonly WORKSHOP_END = 15;
  readonly ACTIVITY_END = 21;
  readonly MEAL_END = 27;
  

  events = [
    {name: "Programming Fundamentals", type: "workshop", location: "QNC 2506", time: "10:30", duration: 60, spots: 150, misc: {cat: this.TECHNICAL, level: this.BEGINNER}},
    {name: "Intro to Web Dev", type: "workshop", location: "QNC 2507", time: "10:30", duration: 60, spots: 150, misc: {cat: this.TECHNICAL, level: this.BEGINNER}},
    {name: "Intro to Android Dev", type: "workshop", location: "QNC 2506", time: "11:30", duration: 60, spots: 150, misc: {cat: this.TECHNICAL, level: this.BEGINNER}},
    {name: "Intro to iOS Dev", type: "workshop", location: "QNC 2507", time: "11:30", duration: 60, spots: 150, misc: {cat: this.TECHNICAL, level: this.BEGINNER}},
    {name: "Intro to Game Dev", type: "workshop", location: "QNC 2506", time: "13:30", duration: 60, spots: 150, misc: {cat: this.TECHNICAL, level: this.BEGINNER}},
    {name: "React & JS Web Dev", type: "workshop", location: "QNC 2507", time: "13:30", duration: 60, spots: 150, misc: {cat: this.TECHNICAL, level: this.BEGINNER}},
    {name: "Intermediate Software Dev", type: "workshop", location: "QNC 1506", time: "15:30", duration: 60, spots: 150, misc: {cat: this.TECHNICAL, level: this.INTERMEDIATE}},
    {name: "Hardware Meets Software", type: "workshop", location: "QNC 2506", time: "15:30", duration: 60, spots: 150, misc: {cat: this.TECHNICAL, level: this.INTERMEDIATE}},
    {name: "Data Science", type: "workshop", location: "QNC 1506", time: "1:30", duration: 60, spots: 150, misc: {cat: this.TECHNICAL, level: this.ADVANCED}},
    {name: "Virtual & Augmented Reality", type: "workshop", location: "QNC 1506", time: "1:30", duration: 60, spots: 150, misc: {cat: this.TECHNICAL, level: this.INTERMEDIATE}},
    {name: "Intro to UI/UX Design", type: "workshop", location: "STC 0040", time: "15:30", duration: 60, spots: 150, misc: {cat: this.NON_TECHNICAL, level: this.BEGINNER}},
    {name: "Developing Your Idea", type: "workshop", location: "STC 0010", time: "15:30", duration: 60, spots: 150, misc: {cat: this.NON_TECHNICAL, level: this.BEGINNER}},
    {name: "Pitching Your Idea", type: "workshop", location: "STC 0010", time: "17:30", duration: 60, spots: 150, misc: {cat: this.NON_TECHNICAL, level: this.BEGINNER}},
    {name: "Good Health, Good Code", type: "workshop", location: "QNC 2506", time: "19:30", duration: 60, spots: 150, misc: {cat: this.NON_TECHNICAL, level: this.BEGINNER}},
    {name: "Build A Team!", type: "workshop", location: "STC 0010", time: "21:00", duration: 180, spots: 150, misc: {cat: this.OTHER_TYPE, level: this.BEGINNER}},
    
    {name: "Therapy Dogs", type: "activity", location: "STC Concourse", time: "15:30", duration: 60, spots: 30},
    {name: "Minute To Win It!", type: "activity", location: "STC 1035", time: "15:30", duration: 60, spots: 30},
    {name: "Meditation", type: "activity", location: "QNC 1507", time: "19:30", duration: 60, spots: 30},
    {name: "Photo Booth", type: "activity", location: "STC Basement", time: "17:30", duration: 60, spots: 30},
    {name: "Networking Fair", type: "activity", location: "STC 1012", time: "9:15", duration: 60, spots: 30},
    {name: "Hackenger Hunt", type: "activity", location: "Various Locations", time: "18:30", duration: 60, spots: 30},

    {name: "Shawarma Plus", type: "meal", location: "STC Basement", time: "12:30", duration: 120, spots: 400},
    {name: "Aunty's Kitchen", type: "meal",  location: "STC Basement", time: "19:30", duration: 120, spots: 400},
    {name: "The Grill", type: "meal", location: "STC Basement", time: "19:30", duration: 120, spots: 400},
    {name: "Vincenzo's", type: "meal",location: "STC Basement", time: "13:30", duration: 120, spots: 400},
    {name: "Breakfast", type: "meal", location: "STC Basement", time: "8:45", duration: 120, spots: 400},
    {name: "Brunch", type: "meal", location: "STC Basement", time: "10:30", duration: 120, spots: 400}
  ];

  actions = [
    // defaults
    {action: "organizing Equithon!", need_secondary: false, available_to: [true, false, false, false, false] },
    {action: "able to answer questions!", need_secondary: false, available_to: [true, true, true, false, false] },
    {action: "volunteering!", need_secondary: false, available_to: [true, false, false, true, false] },
    {action: "working on my project!", need_secondary: false, available_to: [false, false, false, false, true] },
    
    // non-specific statuses
    {action: "just hanging out!", need_secondary: false, available_to: [true, true, true, true, true] },
    {action: "taking a much needed break...zzz...", need_secondary: false, available_to: [true, true, true, true, true] },
    {action: "eating some tasty food!", need_secondary: false, available_to: [true, true, true, true, true] },
    {action: "dealing with a problem :/", need_secondary: false, available_to: [true, true, false, false, false] },
    
    // custom specific statuses
    {action: "helping out at ", need_secondary: true, available_to: [true, true, true, true, false] },
    {action: "chillin' at ", need_secondary: true, available_to: [true, true, true, true, true] },
  ];

  // -------------- SEED DATA --------------------------------
  users = [
    { id: 1, name: "Alex", avatar: "../../assets/imgs/user_profile_pics/profpic_alex.jpg", 
      email: "alex@equithon.org", pass: "alextest", 
      role: this.ORGANIZER, status: {action: 8, secondary: this.events[3] }, favs: [1, 3, 4], 
      at_evnts: [], scan_info: { quick_evnt: this.events[3], amt: 3 } },

    { id: 2, name: "Meagan", avatar: "../../assets/imgs/user_profile_pics/profpic_meagan.jpg", 
      email: "meagan@equithon.org", pass: "meagantest", 
      role: this.ORGANIZER, status: {action: this.ORGANIZER, secondary: null }, favs: [],
      at_evnts: [], scan_info: { quick_evnt: this.events[14], amt: 55 } },

    { id: 3, name: "Andres", avatar: "../../assets/imgs/user_profile_pics/profpic_andres.jpg", 
      email: "andres@equithon.org", pass: "andrestest", 
      role: this.ORGANIZER,  status: {action: this.ORGANIZER, secondary: null }, favs: [], 
      at_evnts: [], scan_info: { quick_evnt: null, amt: 12 } },

    { id: 4, name: "Falah", avatar: "../../assets/imgs/user_profile_pics/profpic_falah.jpg", 
      email: "falah@equithon.org", pass: "falahtest", 
      role: this.ORGANIZER, status: {action: this.ORGANIZER, secondary: null }, favs: [], 
      at_evnts: [], scan_info: { quick_evnt: null, amt: 0 } },

    { id: 5, name: "Equihacker", avatar: "", 
      email: "hackertest@equithon.org", pass: "hackertest", 
      role: this.HACKER,  status: {action: this.VOLUNTEER, secondary: null }, favs: [], 
      at_evnts: [], scan_info: { quick_evnt: null, amt: 0 } },

    { id: 6, name: "Equivolunteer", avatar: "", 
      email: "volunteertest@equithon.org", pass: "volunteertest", 
      role: this.VOLUNTEER, status: {action: this.SPONSOR, secondary: null }, favs: [], 
      at_evnts: [], scan_info: { quick_evnt: null, amt: 95 } },

    { id: 7, name: "Equimentor", avatar: "", 
      email: "mentortest@equithon.org", pass: "mentortest", 
      role: this.MENTOR, status: {action: this.MENTOR, secondary: null }, favs: [], 
      at_evnts: [], scan_info: { quick_evnt: null, amt: 0 } },

    { id: 8, name: "Equisponsor", avatar: "", 
      email: "sponsortest@equithon.org", pass: "sponsortest", favs: [], 
      role: this.SPONSOR, status: {action: this.MENTOR, secondary: null }, 
      at_evnts: [], scan_info: { quick_evnt: null, amt: 0 } },

  ];

  cur_user: any = null;

  
  constructor(public http: HttpClient) {
    for(var u = 0; u < this.users.length; u++){
      for(var e = 0; e < this.events.length; e++) this.users[u].at_evnts.push(false);
    }

    //this.cur_user = this.users[2];
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
    // no search term or filter by: return all users
    console.log("searching with no query");
    return this.users;

  }

  addUser(id, name, role, email, pass){
    let new_user = {
      id: id,
      name: name,
      avatar: "",
      email: email,
      pass: pass,
      role: Number(role),
      status: {action: Number(role), secondary: null}, // set status to default for the user's role
      favs: [],
      at_evnts: [],
      scan_info: { quick_evnt: null, amt: 0 },
    }
    for(var e = 0; e < this.events.length; e++) new_user.at_evnts.push(false);

    this.users.push(new_user);

  }

  userUpdate(some_user_id, some_user){
    let user_indx = -1;
    for(var i = 0; i < this.users.length; i++){
      if(this.users[i].id === some_user_id){
        user_indx = i;
        break;
      }
    }
    if(user_indx > -1) this.users[user_indx] = some_user;
  }

  userGetStatus(){
    let cur_status = this.actions[this.cur_user.status.action].action;
    
    if(this.actions[this.cur_user.status.action].need_secondary && this.cur_user.status.secondary){
      console.log("True");
      cur_status = cur_status + " " + this.cur_user.status.secondary.name + "!";
    }
    console.log("STATUSSSSSSSS is %s", cur_status);
    return cur_status;
  }

  userGetProfilePic(){
    return (this.cur_user && this.cur_user.avatar) ? this.cur_user.avatar : "../../assets/imgs/user_profile_pics/profpic_default.png";
  }

  userEnableQCI(){
    this.cur_user.scan_stats.quick_evnt = this.events[this.cur_user.status.secondary];
    console.log("enabled quick checkin at %d: %s", this.cur_user.status.secondary, this.events[this.cur_user.status.secondary].name);
  }

  userGetAttended(query: string){
    let ret_lst = [];
    console.log("getting stats query %s", query);
    if(["workshop", "activity", "meal"].indexOf(query) > -1){
      console.log("user searching for an activity");
      for(var i = 0; i < this.cur_user.at_evnts.length; i++){
        if(this.cur_user.at_evnts[i]) console.log("user attended %d!", i);
        if(this.cur_user.at_evnts[i] && this.events[i].type === query){
          console.log("found one event %s", this.events[i].name);
          ret_lst.push(this.events[i]);
        }
      }
    }
    return ret_lst;
  }

  userLogIn(login_email, login_password){
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

  userLogOut(){
    this.cur_user = null;
  }
  
}
