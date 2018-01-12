import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }

  messageList: string[] = [];

  add(mssg: string) {
    this.messageList.push(mssg);
  }

  clear() {
    this.messageList = [];
  }

}
