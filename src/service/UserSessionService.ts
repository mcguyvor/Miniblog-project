import { auth } from 'firebase';
import firebaseProvider from './FirebaseProvider';
import AccountAPI from './API/AccountAPI';

export default class UserSessionService {

    private auth = auth(firebaseProvider.firebase)
    private accountAPI = new AccountAPI()

    async register(email: string, displayName: string, password: string) {
        const userCredential = await this.auth.createUserWithEmailAndPassword(email, password)
        if (userCredential.user) {
            const user = await this.accountAPI.register({
                email,
                displayName,
                uid: userCredential.user.uid
            })
        } else {
            throw Error("User is somehow null")
        }
    }
}