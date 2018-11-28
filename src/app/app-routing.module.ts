import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
//import { ContactPipe } from './pipes/contact.pipe';
import { AddContactComponent } from './add-contact/add-contact.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'AddContact', component: AddContactComponent },
  { path: 'Contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 


}