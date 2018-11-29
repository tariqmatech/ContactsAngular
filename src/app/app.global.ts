import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobals  {

    baseAppUrl: string = 'http://internal.matechco.com:8015/';


    AuthenticationToken: string;
    Authorization: string;
    domain: string = 'http://localhost:4200/';

    // API's
    postLogin: string = this.baseAppUrl + 'Home/GetCommonModel';
    getAllContacts: string = this.baseAppUrl + 'Home/GetMenus';
    postAddcontact: string = this.baseAppUrl + 'Home/GetResources';
    getList: string = this.baseAppUrl + 'Home/GetReviews';    
}
