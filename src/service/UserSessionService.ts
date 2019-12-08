import AccountAPI from './API/AccountAPI'
import User from '../model/User'
import authProvider from './FirebaseAuthProvider'

export default class UserSessionService {
    private authProvider = authProvider
    private accountAPI = new AccountAPI()

    async register (email: string, displayName: string, password: string): Promise<User> {
        const userCredential = await this.authProvider.createUserWithEmailAndPassword(email, password)
        if (userCredential.user) {
            const user = await this.accountAPI.register({
                email,
                displayName,
                uid: userCredential.user.uid
            })
            return user
        } else {
            throw Error('User is somehow null')
        }
    }

    async login (email: string, password: string): Promise<User> {
        const userCredential = await this.authProvider.signInWithEmailAndPassword(email, password)
        if (userCredential.user) {
            const user = await this.accountAPI.getProfile()
            return user
        } else {
            throw Error('User is somehow null')
        }
    }

    async getProfile (): Promise<User> {
        return this.accountAPI.getProfile()
    }
}
