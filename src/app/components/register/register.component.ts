// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent {

// }

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
   imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.authService.register(user).subscribe(response => {
      alert('Registration successful!');
      this.router.navigate(['/login']);
    }, error => {
      alert('Registration failed: ' + error.error.message);
    });
  }
}

