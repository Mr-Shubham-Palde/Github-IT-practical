import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './comp/home/home.component';
import { RegistrationComponent } from './comp/registration/registration.component';
import { LoginComponent } from './comp/login/login.component';

const routes: Routes = [
  // { path: '', redirectTo: '/register', pathMatch: 'full' },  // Redirect to '/register' instead of '/registration'
  { path: 'register', component: RegistrationComponent },  // Keep this lowercase for consistency
  { path: 'login', component: LoginComponent },            // Path should be lowercase 'login'
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
