
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateBookingInput {
    exampleField?: Nullable<number>;
}

export interface UpdateBookingInput {
    id: number;
}

export interface CreateProfessionalInput {
    name: string;
    lastName: string;
    phone: string;
    userId: number;
}

export interface UpdateProfessionalInput {
    name?: Nullable<string>;
    lastName?: Nullable<string>;
    phone?: Nullable<string>;
}

export interface CreateServiceInput {
    title: string;
    description: string;
    photos: string[];
    contact: string;
    category: string;
    userId: number;
}

export interface UpdateServiceInput {
    title?: Nullable<string>;
    description?: Nullable<string>;
    photos?: Nullable<string[]>;
    contact?: Nullable<string>;
    category?: Nullable<string>;
    userId?: Nullable<number>;
}

export interface CreateUserInput {
    userName: string;
    email: string;
    password: string;
}

export interface UpdateUserInput {
    userName?: Nullable<string>;
    email?: Nullable<string>;
}

export interface Booking {
    exampleField?: Nullable<number>;
}

export interface IQuery {
    bookings(): Nullable<Booking>[] | Promise<Nullable<Booking>[]>;
    booking(id: number): Nullable<Booking> | Promise<Nullable<Booking>>;
    professionals(): Nullable<Professional>[] | Promise<Nullable<Professional>[]>;
    professional(id: number): Nullable<Professional> | Promise<Nullable<Professional>>;
    getUser(): Nullable<User> | Promise<Nullable<User>>;
    services(): Service[] | Promise<Service[]>;
    service(id: number): Nullable<Service> | Promise<Nullable<Service>>;
    user(id: number): Nullable<User> | Promise<Nullable<User>>;
    users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    userServices(userId: number): Service[] | Promise<Service[]>;
}

export interface IMutation {
    createBooking(createBookingInput: CreateBookingInput): Booking | Promise<Booking>;
    updateBooking(updateBookingInput: UpdateBookingInput): Booking | Promise<Booking>;
    removeBooking(id: number): Nullable<Booking> | Promise<Nullable<Booking>>;
    createProfessional(createProfessionalInput: CreateProfessionalInput): Professional | Promise<Professional>;
    updateProfessional(id: number, updateProfessionalInput: UpdateProfessionalInput): Professional | Promise<Professional>;
    removeProfessional(id: number): Nullable<Professional> | Promise<Nullable<Professional>>;
    createService(data: CreateServiceInput): Service | Promise<Service>;
    updateService(id: number, data: UpdateServiceInput): Service | Promise<Service>;
    deleteService(id: number): Nullable<Service> | Promise<Nullable<Service>>;
    createUser(createUserInput: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
    updateUser(id: number, updateUserInput: UpdateUserInput): Nullable<User> | Promise<Nullable<User>>;
}

export interface Professional {
    id: number;
    name: string;
    lastName: string;
    phone: string;
    userId: number;
    userOfProfessional?: Nullable<User>;
    services: Service[];
}

export interface Service {
    id: number;
    title: string;
    description: string;
    photos: string[];
    contact: string;
    category: string;
    userId: number;
}

export interface User {
    id: number;
    userName: string;
    email: string;
    services: Service[];
    password: string;
    professional?: Nullable<Professional>;
}

type Nullable<T> = T | null;
