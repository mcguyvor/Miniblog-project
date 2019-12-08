export enum ResponseStatus {
    ERROR = 'error',
    OK = 'ok'
}

export interface HTTPResponse {
    status: ResponseStatus;
    body: any;
}

export interface ErrorResponse extends HTTPResponse {
    status: ResponseStatus.ERROR;
    body: {
        message: string;
    };
}

export interface Response<T = any> extends HTTPResponse {
    status: ResponseStatus.OK;
    body: T;
}
