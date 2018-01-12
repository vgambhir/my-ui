import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[];
  selectedUser: User;
  constructor(private userService: UserService) { }

  ngOnInit() {

    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  // adding asynchronous service call with Observable

  getUsers(): void {
    this.userService.getUsers().subscribe(userArr => this.userList = userArr);
  }
}
