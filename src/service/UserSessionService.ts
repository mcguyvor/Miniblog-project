import AccountAPI from './API/AccountAPI'
import User from '../model/User'
import authProvider from './provider/FirebaseAuthProvider'
import AuthStateEvent from './provider/AuthStateEvent'
import { EventEmitter } from 'events'

export default class UserSessionService {
    private authProvider = authProvider
    private accountAPI = new AccountAPI()

    authStateEvent: AuthStateEvent = new EventEmitter()

    static shared = new UserSessionService()

    private constructor() {
        this.observeAuthStateChange()
    }

    async register(email: string, displayName: string, password: string): Promise<User> {
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

    async login(email: string, password: string): Promise<User> {
        const userCredential = await this.authProvider.signInWithEmailAndPassword(email, password)
        if (userCredential.user) {
            const user = await this.accountAPI.getProfile()
            return user
        } else {
            throw Error('User is somehow null')
        }
    }

    getProfile(): Promise<User> {
        return this.accountAPI.getProfile()
    }

    logout(): Promise<void> {
        return this.authProvider.signOut()
    }

    isLoggedIn(): boolean {
        return this.authProvider.currentUser !== null || this.authProvider.currentUser !== undefined
    }

    private observeAuthStateChange(): void {
        authProvider.onAuthStateChanged((user) => {
            if (user) {
                // User logged in
                this.getProfile().then((fetchedUser) => {
                    this.authStateEvent.emit('login', fetchedUser)
                }).catch((error) => {
                    console.log('Auth state error:', error.message)
                    this.authStateEvent.emit('error', error)
                })
            } else {
                // User logged out
                this.authStateEvent.emit('logout')
            }
        }, (firebaseError) => {
            console.log('Firebase auth error', firebaseError.code, firebaseError.message)
            this.authStateEvent.emit('error', Error(firebaseError.message + ' ' + firebaseError.code))
        })
    }
}
