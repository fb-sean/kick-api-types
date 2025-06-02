export interface Introspect {
    active: boolean;
    client_id: string;
    exp: number;
    scope: string;
    token_type: string;
}

export interface User {
    email: string;
    name: string;
    profile_picture: string;
    user_id: number;
}
