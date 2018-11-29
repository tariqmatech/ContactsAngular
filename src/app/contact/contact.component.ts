import { Component, OnInit } from '@angular/core';
import { AppGlobals } from '../app.global';
import { Response, GetAllContacts} from '../core/models/index';
import { ContactService } from '../core/services/index';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  allContactResponse: Response<GetAllContacts>;
  contactData;

  constructor(
    public appGlobals: AppGlobals,
    private contactService: ContactService) { }

  ngOnInit() {
    this.getAllContacts();
  }

  getAllContacts(): void {
    this.contactService.GetAllContacts()
      .subscribe(response => {
        this.allContactResponse = response;
        this.contactData = this.allContactResponse.Data
      });
  }
  
}
