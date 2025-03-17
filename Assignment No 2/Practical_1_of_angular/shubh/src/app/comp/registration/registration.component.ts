import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(private router: Router) {}

  onRegister() {
    // Handle registration logic (for now it's just navigation)
    console.log('User registered');
    this.router.navigate(['login']); // Navigate to login page
  }
}

