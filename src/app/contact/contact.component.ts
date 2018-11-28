import { Component, OnInit } from '@angular/core';
import { ContactService } from "../core/services/contact.service";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(contactService:ContactService) { 
    contactService.GetAllContacts(2);
    contactService.GetList();
  }

  ngOnInit() {
  }

}
