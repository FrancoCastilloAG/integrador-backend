
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
    professionalId: number;
}

export interface UpdateServiceInput {
    title?: Nullable<string>;
    description?: Nullable<string>;
    photos?: Nullable<string[]>;
    contact?: Nullable<string>;
    category?: Nullable<string>;
    professionalId?: Nullable<number>;
}

export interface CreateUserInput {
    name: string;
    email: string;
    rol: string;
    password: string;
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
    user?: Nullable<User>;
    services: Service[];
}

export interface IQuery {
    getProfessionalById(id: number): Nullable<Professional> | Promise<Nullable<Professional>>;
    getAllServices(): Service[] | Promise<Service[]>;
    getServicesByProfessionalId(id: number): Service[] | Promise<Service[]>;
    getUserById(id: number): Nullable<User> | Promise<Nullable<User>>;
    getUsers(): User[] | Promise<User[]>;
}

export interface IMutation {
    createProfessional(createProfessional: CreateProfessionalInput): Nullable<Professional> | Promise<Nullable<Professional>>;
    updateProfessional(id: number, data: UpdateProfessionalInput): Nullable<Professional> | Promise<Nullable<Professional>>;
    deleteProfessional(id: number): Nullable<Professional> | Promise<Nullable<Professional>>;
    createService(data: CreateServiceInput): Service | Promise<Service>;
    deleteService(id: number): Service | Promise<Service>;
    updateService(id: number, data: UpdateServiceInput): Service | Promise<Service>;
    createUser(createUserInput: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
    updateUser(id: number, updateUserInput: UpdateUserInput): Nullable<User> | Promise<Nullable<User>>;
    deleteUser(id: number): User | Promise<User>;
}

export interface Service {
    id: number;
    title: string;
    description: string;
    photos: string[];
    contact: string;
    category: string;
    professionalId: number;
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    services: Service[];
    rol: string;
    professional?: Nullable<Professional>;
}

type Nullable<T> = T | null;
