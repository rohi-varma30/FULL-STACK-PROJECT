export interface Property {
    id?: number; // Optional, in case of new property
    name: string;
    description: string;
    location: string;
    price: number;
    ownerId?: number; // Optional, to link property to a user
}
