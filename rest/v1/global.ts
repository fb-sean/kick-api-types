export interface RESTError {
    data: string;
    message: string;
}

export interface RESTResult<T> {
    data: T;
    message: string;
}
