import Axios, { AxiosResponse } from "axios"
import { HTTPResponse, Response, ResponseStatus, ErrorResponse } from './Response';
import { isNullOrUndefined } from "util";

export default abstract class BaseAPI {

    protected readonly BASE_URL = "https://miniblock-api.herokuapp.com/v1"

    protected isOkResponse(response: HTTPResponse): response is Response {
        return response.status === ResponseStatus.OK
    }

    protected async get<T = any>(path: string, params: any): Promise<Response<T> | ErrorResponse> {
        const response = await Axios.get(this.BASE_URL + path, params)
        return response.data
    }

    protected async post<T = any>(path: string, params: any): Promise<Response<T> | ErrorResponse> {
        const response = await Axios.post(this.BASE_URL + path, params)
        return response.data
    }

    protected async put<T = any>(path: string, params: any): Promise<Response<T> | ErrorResponse> {
        const response = await Axios.put(this.BASE_URL + path, params)
        return response.data
    }

    protected async delete<T = any>(path: string, params: any): Promise<Response<T> | ErrorResponse> {
        const response = await Axios.delete(this.BASE_URL + path, params)
        return response.data
    }
}