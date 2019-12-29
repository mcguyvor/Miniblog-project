import BaseAPI from './baseAPI'
import User from '../../model/User'

export interface RegisterInfo {
    email: string;
    displayName: string;
    uid: string;
}

enum Path {
    REGISTER = '/register',
    PROFILE = '/profile'
}

export default class AccountAPI extends BaseAPI {
    private readonly BASE_PATH = '/account'

    async register(registerInfo: RegisterInfo): Promise<User> {
        const response = await this.post(this.BASE_PATH + Path.REGISTER, registerInfo)
        return this.validateResponse(response)
    }

    async getProfile(): Promise<User> {
        await this.setAuthToken()
        const response = await this.get(this.BASE_PATH + Path.PROFILE)
        return this.validateResponse(response)
    }
}
