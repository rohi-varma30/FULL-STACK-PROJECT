// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-booking-form',
//   standalone: true,
//   imports: [],
//   templateUrl: './booking-form.component.html',
//   styleUrl: './booking-form.component.css'
// })
// export class BookingFormComponent {

// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../models/property.model';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-form',
  standalone: true,
   imports: [FormsModule,CommonModule],
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  property!: Property;
  checkInDate: string = '';
  checkOutDate: string = '';
  numberOfGuests: number = 1;

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private propertyService: PropertyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.propertyService.getPropertyById(+id).subscribe(data => {
        this.property = data;
      });
    }
  }

  bookProperty() {
    const booking = {
      propertyId: this.property.id,
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate,
      numberOfGuests: this.numberOfGuests
    };

    this.bookingService.createBooking(booking).subscribe(() => {
      alert('Booking successful!');
      this.router.navigate(['/properties']);
    });
  }
}
