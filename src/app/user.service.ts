import { Injectable } from '@angular/core';
import {User} from './user';
import {USER_LIST_DATA} from './mock-users';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()
export class UserService {

  constructor(private msgSvc: MessageService) { }

  getUsers(): Observable<User[]> {
    this.msgSvc.add('User Service: fetched Users');
    return of (USER_LIST_DATA);
  }
}
