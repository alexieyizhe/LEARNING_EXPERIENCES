import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

  users: any;

  constructor(public http: HttpClient) {

    this.users = [
      { id: 1, name: "Alex", role: "organizer", had_dinner: false },
      { id: 2, name: "Meagan", role: "organizer", had_dinner: true },
      { id: 3, name: "Falah", role: "organizer", had_dinner: false }
    ];

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

}
