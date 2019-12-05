import firebase from "firebase";
import firebaseProvider from './FirebaseProvider';

export interface FirebaseAuthProvider {
    auth: firebase.auth.Auth
}

class FirebaseAuthProviderImpl implements FirebaseAuthProvider {

    auth = firebase.auth(firebaseProvider.app)

}

const authProvider: FirebaseAuthProvider = new FirebaseAuthProviderImpl()

export default authProvider