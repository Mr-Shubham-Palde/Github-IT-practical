import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin() {
    // Handle login logic (for now it's just navigation)
    console.log('User logged in');
    this.router.navigate(['/home']); // Navigate to home page
  }
}
