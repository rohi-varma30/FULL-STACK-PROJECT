// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-add-property',
//   standalone: true,
//   imports: [],
//   templateUrl: './add-property.component.html',
//   styleUrl: './add-property.component.css'
// })
// export class AddPropertyComponent {

// }

import { Component } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-property',

  standalone: true,
   imports: [FormsModule],
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  name: string = '';
  description: string = '';
  location: string = '';
  price: number = 0;

  constructor(private propertyService: PropertyService, private router: Router) {}

  addProperty() {
    const property = {
      name: this.name,
      description: this.description,
      location: this.location,
      price: this.price
    };

    this.propertyService.addProperty(property).subscribe(response => {
      alert('Property added successfully!');
      this.router.navigate(['/properties']);
    }, error => {
      alert('Failed to add property: ' + error.error.message);
    });
  }
}

