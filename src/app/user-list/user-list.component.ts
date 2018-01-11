import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {USER_LIST_DATA} from '../mock-users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList = USER_LIST_DATA;
  selectedUser: User;
  constructor() { }

  ngOnInit() {
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

}
