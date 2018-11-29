import { Injectable } from '@angular/core';


import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
//import { catchError, map, tap,  } from 'rxjs/operators';

@Injectable()
export class MessageService {

  private messageSource = new Subject<string>();
  currentMessage = this.messageSource.asObservable();
  //currentMessage: any; 

  messages: string[] = [];


  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
  changemessage(msg: string) {
    this.messageSource.next(msg);

  }



}
