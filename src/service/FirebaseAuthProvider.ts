import firebase from 'firebase'
import firebaseProvider from './FirebaseProvider'

export interface FirebaseAuthProvider {
    readonly currentUser: firebase.User | null;

    createUserWithEmailAndPassword(email: string, password: string): Promise<firebase.auth.UserCredential>;
    signInWithEmailAndPassword(email: string, password: string): Promise<firebase.auth.UserCredential>;
}

class FirebaseAuthProviderImpl implements FirebaseAuthProvider {
    auth = firebase.auth(firebaseProvider.app)

    get currentUser (): firebase.User | null {
        return this.auth.currentUser
    }

    private async ensurePersistenceState (): Promise<void> {
        try {
            await this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        } catch (err) {
            console.log('Setting persistence error', err.message)
            console.log(err)
            throw err
        }
    }

    async createUserWithEmailAndPassword (email: string, password: string): Promise<firebase.auth.UserCredential> {
        await this.ensurePersistenceState()
        return this.auth.createUserWithEmailAndPassword(email, password)
    }

    async signInWithEmailAndPassword (email: string, password: string): Promise<firebase.auth.UserCredential> {
        await this.ensurePersistenceState()
        return this.auth.signInWithEmailAndPassword(email, password)
    }
}

const authProvider: FirebaseAuthProvider = new FirebaseAuthProviderImpl()

export default authProvider
