// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class PropertyService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'http://localhost:8080/api/properties';

  constructor(private http: HttpClient) {}

  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.apiUrl);
  }

  getPropertyById(id: number): Observable<Property> {
    return this.http.get<Property>(`${this.apiUrl}/${id}`);
  }

  addProperty(property: Property): Observable<Property> {
    return this.http.post<Property>(this.apiUrl, property);
  }
}
