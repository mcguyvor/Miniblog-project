import BaseAPI from './BaseAPI';
import User from '../../model/User';

export interface RegisterInfo {
    email: string
    displayName: string
    uid: string
}

enum Path {
    REGISTER = "/register",
    LOGIN = "/login"
}

export default class AccountAPI extends BaseAPI {

    private readonly BASE_PATH = "/account"
    
    async register(registerInfo: RegisterInfo): Promise<User> {
        const response = await this.post(this.BASE_PATH + Path.REGISTER, registerInfo)
        if (this.isOkResponse(response)) {
            return response.body
        } else {
            throw Error(response.body.message)
        }
    }
}