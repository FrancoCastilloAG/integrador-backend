
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

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
    name: string;
    email: string;
    rol: string;
}

export interface UpdateUserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    rol: string;
}

export interface IQuery {
    services(): Service[] | Promise<Service[]>;
    service(id: number): Nullable<Service> | Promise<Nullable<Service>>;
    user(id: number): Nullable<User> | Promise<Nullable<User>>;
    users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    userServices(userId: number): Service[] | Promise<Service[]>;
}

export interface IMutation {
    createService(data: CreateServiceInput): Service | Promise<Service>;
    updateService(id: number, data: UpdateServiceInput): Service | Promise<Service>;
    deleteService(id: number): Nullable<Service> | Promise<Nullable<Service>>;
    createUser(createUserInput: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
    updateUser(id: string, updateUserInput: UpdateUserInput): Nullable<User> | Promise<Nullable<User>>;
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
    name: string;
    email: string;
    services: Service[];
    rol: string;
}

type Nullable<T> = T | null;
