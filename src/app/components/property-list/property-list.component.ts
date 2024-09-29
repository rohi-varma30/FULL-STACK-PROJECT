// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-property-list',
//   standalone: true,
//   imports: [],
//   templateUrl: './property-list.component.html',
//   styleUrl: './property-list.component.css'
// })
// export class PropertyListComponent {

// }

import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../models/property.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(data => {
      this.properties = data;
    });
  }
}

