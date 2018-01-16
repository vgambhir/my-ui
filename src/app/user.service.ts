import { Injectable } from '@angular/core';
import {User} from './user';
import {USER_LIST_DATA} from './mock-users';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  private registrationUrl = 'http://dr.us.sathyasai.org:9000/registration/user';

  constructor(private httpClient: HttpClient, private msgSvc: MessageService) { }

  getUsers(): Observable<User[]> {
    this.msgSvc.add('User Service: fetched Users');

    this.httpClient.get(this.registrationUrl).subscribe(resp => { console.log(resp); } );

     return of (USER_LIST_DATA);



  }


  /** Log a UserService message with the MessageService */
  private log(message: string) {
    this.msgSvc.add('HeroService: ' + message);
  }
}
