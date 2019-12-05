import Axios from "axios"
import { HTTPResponse, Response, ResponseStatus, ErrorResponse } from './Response';
import authProvider from '../FirebaseAuthProvider';
import { isNullOrUndefined } from 'util';

interface RequestHeader {
    authorization?: string
}

export class NoCurrentUserError extends Error {
    message = "User is not logged in"
}

export class AccessTokenExpire extends Error {
    message = "User session expired"
}

export default abstract class BaseAPI {

    protected readonly BASE_URL = "https://miniblock-api.herokuapp.com/v1"
    private headers: RequestHeader = {}
    private authProvider = authProvider

    protected isOkResponse(response: HTTPResponse): response is Response {
        return response.status === ResponseStatus.OK
    }

    protected async setAuthToken() {
        const currentUser = authProvider.auth.currentUser
        if (isNullOrUndefined(currentUser)) {
            throw new NoCurrentUserError()
        }
        try {
            const token = await currentUser.getIdToken()
            this.headers.authorization = `Bearer ${token}`
        } catch(error) {
            console.log(error)
            throw new AccessTokenExpire()
        }
    }

    protected async get<T = any>(path: string, params: any = null): Promise<Response<T> | ErrorResponse> {
        const response = await Axios.get(this.BASE_URL + path, { params, headers: this.headers })
        return response.data
    }

    protected async post<T = any>(path: string, params: any = null): Promise<Response<T> | ErrorResponse> { 
        const response = await Axios.post(this.BASE_URL + path, params, { headers: this.headers })
        return response.data
    }

    protected async put<T = any>(path: string, params: any = null): Promise<Response<T> | ErrorResponse> {
        const response = await Axios.put(this.BASE_URL + path, params, { headers: this.headers })
        return response.data
    }

    protected async delete<T = any>(path: string, params: any = null): Promise<Response<T> | ErrorResponse> {
        const response = await Axios.delete(this.BASE_URL + path, { params, headers: this.headers })
        return response.data
    }
}