export interface Booking {
    id?: number; // Optional, in case of new booking
    propertyId: number; // The ID of the property being booked
    userId: number; // The ID of the user making the booking
    checkInDate: Date;
    checkOutDate: Date;
    guests: number;
}
