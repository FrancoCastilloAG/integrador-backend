
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

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
    name: string;
    email: string;
    rol: string;
}

export interface UpdateUserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    rol: string;
}

export interface Professional {
    id: number;
    name: string;
    lastName: string;
    phone: string;
    userId: number;
    User?: Nullable<User>;
    services: Service[];
}

export interface IQuery {
    professionals(): Nullable<Professional>[] | Promise<Nullable<Professional>[]>;
    professional(id: number): Nullable<Professional> | Promise<Nullable<Professional>>;
    services(): Service[] | Promise<Service[]>;
    service(id: number): Nullable<Service> | Promise<Nullable<Service>>;
    user(id: number): Nullable<User> | Promise<Nullable<User>>;
    users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    userServices(userId: number): Service[] | Promise<Service[]>;
}

export interface IMutation {
    createProfessional(createProfessionalInput: CreateProfessionalInput): Professional | Promise<Professional>;
    updateProfessional(id: number, updateProfessionalInput: UpdateProfessionalInput): Professional | Promise<Professional>;
    removeProfessional(id: number): Nullable<Professional> | Promise<Nullable<Professional>>;
    createService(data: CreateServiceInput): Service | Promise<Service>;
    updateService(id: number, data: UpdateServiceInput): Service | Promise<Service>;
    deleteService(id: number): Nullable<Service> | Promise<Nullable<Service>>;
    createUser(createUserInput: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
    updateUser(id: number, updateUserInput: UpdateUserInput): Nullable<User> | Promise<Nullable<User>>;
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
