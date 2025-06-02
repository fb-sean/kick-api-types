export interface RESTError {
    data: string;
    message: string;
}

export interface RESTResponse<T> {
    data: T;
    message: string;
}
