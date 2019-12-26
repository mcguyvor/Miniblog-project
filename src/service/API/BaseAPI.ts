import Axios from 'axios'
import { HTTPResponse, Response, ResponseStatus, ErrorResponse } from './Response'
import authProvider from '../FirebaseAuthProvider'
import * as querystring from 'querystring'

interface RequestHeader {
    authorization?: string;
}

export class NoCurrentUserError extends Error {
    message = 'User is not logged in'
}

export class AccessTokenExpire extends Error {
    message = 'User session expired'
}

export default abstract class BaseAPI {
    private readonly BASE_URL = 'https://miniblock-api.herokuapp.com/v1'
    private headers: RequestHeader = {}
    private authProvider = authProvider

    private isOkResponse(response: HTTPResponse): response is Response {
        return response.status === ResponseStatus.OK
    }

    private isErrorResponse(response: HTTPResponse): response is ErrorResponse {
        return response.status === ResponseStatus.ERROR
    }

    protected async validateResponse<T>(response: HTTPResponse): Promise<T> {
        if (this.isOkResponse(response)) {
            return response.body
        } else {
            const error = response as ErrorResponse
            throw Error(error.body.message)
        }
    }

    protected async setAuthToken(): Promise<void> {
        const currentUser = authProvider.currentUser
        if (currentUser === null || currentUser === undefined) {
            throw new NoCurrentUserError()
        }
        try {
            const token = await currentUser.getIdToken()
            this.headers.authorization = `Bearer ${token}`
        } catch (error) {
            console.log(error)
            throw new AccessTokenExpire()
        }
    }

    protected async setAuthTokenOptional(): Promise<void> {
        const currentUser = authProvider.currentUser
        try {
            if (currentUser) {
                const token = await currentUser.getIdToken()
                this.headers.authorization = `Bearer ${token}`
            }
        } catch (error) {
            console.log(error)
            throw new AccessTokenExpire()
        }
    }

    protected async get<T = any>(path: string, params: any = null): Promise<Response<T> | ErrorResponse> {
        try {
            const response = await Axios.get(this.BASE_URL + path, { params, headers: this.headers })
            return response.data
        } catch (err) {
            const responseData = err.response.data
            if (this.isErrorResponse(responseData)) {
                return responseData
            } else {
                throw err
            }
        }
    }

    protected async post<T = any>(path: string, params: any = null): Promise<Response<T> | ErrorResponse> {
        try {
            const response = await Axios.post(this.BASE_URL + path, params, { headers: this.headers })
            return response.data
        } catch (err) {
            const responseData = err.response.data
            if (this.isErrorResponse(responseData)) {
                return responseData
            } else {
                throw err
            }
        }
    }

    protected async put<T = any>(path: string, params: any = null): Promise<Response<T> | ErrorResponse> {
        try {
            const response = await Axios.put(this.BASE_URL + path, params, { headers: this.headers })
            return response.data
        } catch (err) {
            const responseData = err.response.data
            if (this.isErrorResponse(responseData)) {
                return responseData
            } else {
                throw err
            }
        }
    }

    protected async delete<T = any>(path: string, params: any = null): Promise<Response<T> | ErrorResponse> {
        try {
            const response = await Axios.delete(this.BASE_URL + path, { params, headers: this.headers })
            return response.data
        } catch (err) {
            const responseData = err.response.data
            if (this.isErrorResponse(responseData)) {
                return responseData
            } else {
                throw err
            }
        }
    }

    protected queryString(obj: any): string {
        const cleanedObj: any = {}
        const entries = Object.entries(obj)
        for (const entry of entries) {
            if (entry[1] !== null && entry[1] !== undefined) {
                cleanedObj[entry[0]] = entry[1]
            }
        }
        return '?' + querystring.stringify(cleanedObj)
    }
}
