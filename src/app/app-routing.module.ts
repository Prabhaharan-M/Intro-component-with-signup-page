import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContentpageComponent } from './contentpage/contentpage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component:HomeComponent },
  {path:'contact', component:ContactComponent },
  {path:'login', component:LoginComponent },
  {path:'contentpage', component:ContentpageComponent },
  {path:'signup', component:SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
