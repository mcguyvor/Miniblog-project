import firebase from "firebase"

export interface FirebaseProvider {
    firebase: firebase.app.App
}

class FirebaseProviderImpl implements FirebaseProvider {

    firebase!: firebase.app.App

    constructor() {
        const firebaseConfig = {
            apiKey: "AIzaSyBeVH4br63xkc3oigY_ZeqNXfW6IAoJ2_A",
            authDomain: "mini-block.firebaseapp.com",
            databaseURL: "https://mini-block.firebaseio.com",
            projectId: "mini-block",
            storageBucket: "mini-block.appspot.com",
            messagingSenderId: "348540060639",
            appId: "1:348540060639:web:b54d5057503bbb02edfa6a",
            measurementId: "G-6BTMFE7LBG"
        }

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig)
        firebase.analytics()
          
        this.firebase = firebase.app()
    }
}

const firebaseProvider = new FirebaseProviderImpl()

export default firebaseProvider