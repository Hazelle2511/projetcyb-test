import app from 'firebase/app';
import 'firebase/auth';

const Config = {
    apiKey: "AIzaSyDTU5LpzQB0S8pWWaNBg7RVssLXEiF1kxU",
    authDomain: "projet-cyb-signup.firebaseapp.com",
    projectId: "projet-cyb-signup",
    storageBucket: "projet-cyb-signup.appspot.com",
    messagingSenderId: "212315726896",
    appId: "1:212315726896:web:a325936465a1e9e1d6b9f5"
  };

class Firebase {
    constructor(){
        app.initializeApp(Config);
        this.auth = app.auth();
        
        // //
        // var provider = new app.auth.GoogleAuthProvider()
            // this.google = new app.auth.GoogleAuthProvider()
        // const provider = new GoogleAuthProvider();
    }

    // methode d'inscription

    signupUser = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email,password);
    


    // methode connexion

    loginUser = (email, password) => {
    this.auth.signInWithEmailAndPassword(email,password)
     console.log('OK')
    }
   
  


    // deconnexion methode

    signoutUser = () => this.auth.signOut();



    //Récupérer le mdp

passwordReset = email => this.auth.sendPasswordResetEmail(email);
};



export default Firebase;
