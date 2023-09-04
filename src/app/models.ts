export interface Credentials {
    username: string;
    password: string;
}


export interface RegisterData {
    username: string;
    email: string;
    password: string;
}

export interface UserDetails {
    username: string | null;
    roleId: number | null;
    authority: string | null;
}

export interface CrearEquipo {
    nombre: string
}

export interface UpdateEquipo {
    nombre?: string | null;
    fundacion?: string | null;
}