import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties = [
    {
      name: 'Sindun-myeon, Icheon-si',
      location: 'South Korea',
      distance: '5,244 kilometers',
      price: '₹6,711',
      imageUrl: 'path-to-image'
    },
    {
      name: 'Ponta Delgada, Portugal',
      location: 'Portugal',
      distance: '10,025 kilometers',
      price: '₹12,525',
      imageUrl: 'path-to-image'
    }
    // Add more properties
  ];

  ngOnInit(): void {}
}
