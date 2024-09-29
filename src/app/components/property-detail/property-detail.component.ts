// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-property-detail',
//   standalone: true,
//   imports: [],
//   templateUrl: './property-detail.component.html',
//   styleUrl: './property-detail.component.css'
// })
// export class PropertyDetailComponent {

// }


import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../models/property.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  property!: Property;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.propertyService.getPropertyById(+id).subscribe(data => {
        this.property = data;
      });
    }
  }
}
