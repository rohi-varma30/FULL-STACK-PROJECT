// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

// }

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
   imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    this.authService.login(credentials).subscribe(response => {
      // Here you can save the token or user information as needed
      alert('Login successful!');
      this.router.navigate(['/']);
    }, error => {
      alert('Login failed: ' + error.error.message);
    });
  }
}

