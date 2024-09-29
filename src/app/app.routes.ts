import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'properties', component: PropertyListComponent },
    { path: 'properties/:id', component: PropertyDetailComponent },
    { path: 'booking/:id', component: BookingFormComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'admin/add-property', component: AddPropertyComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];

