import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-card',
  standalone:true,
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {
  @Input() property: any;
}
