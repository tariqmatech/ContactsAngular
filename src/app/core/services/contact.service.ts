import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddContact } from '../interfaces/add-contact';
import { GetAllContacts } from '../interfaces/get-all-contacts';
import { GetList } from '../interfaces/get-list';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  ROOT_URL = `http://internal.matechco.com:8015`;
  
  constructor(private http: HttpClient) {}

  GetAllContacts(contactID) {
    return this.http.get<GetAllContacts[]>(`${this.ROOT_URL}/Contacts/Get/`+ contactID);
  }
  GetList() {
    return this.http.get<GetList[]>(`${this.ROOT_URL}/Contacts/List?PageOffset=1&PageSize=10`);
  }
  
}