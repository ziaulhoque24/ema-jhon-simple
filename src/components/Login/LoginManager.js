import { initializeApp } from 'firebase/app';
import firebaseConfig from './Firebase.config';
import {getAuth, signInWithPopup,  GoogleAuthProvider,signOut , createUserWithEmailAndPassword,signInWithEmailAndPassword , updateProfile, FacebookAuthProvider } from "firebase/auth";

initializeApp(firebaseConfig);
const auth = getAuth();

// google sign in
export const googleSignIn = ()=> {
  let signedInUser = {};
    const provider = new GoogleAuthProvider();
    return   signInWithPopup(auth, provider)
       .then((result) => {
        // The signed-in user info.
        const {displayName,photoURL,email } = result.user;
          signedInUser = {
          name: displayName,
          photoId: photoURL,
          email: email
        }
        return signedInUser;    
      }).catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });   
}

// sign out 

export const handleSignOut = ()=> {
     return signOut(auth)
           .then(() => {
                const signOutUser = {
                name: '',
                photoId: '',
                email: '',
                password: ''
                }
                return signOutUser;
      }).catch((error) => {
        // An error happened.
      });
    }

 // fb log in 
 export const handleFbSign = ()=>{
  const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const {displayName,photoURL,email } = result.user;
                const signedInUser = {
                name: displayName,
                photoId: photoURL,
                email: email
                }
                return signedInUser;
            })
  .catch((error) => {
  
   return error.message;
    
  });
}    
// sign in with email password
export const handleCreateWithEmailAndPass = (email, password , name)=>{

       return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // const user = userCredential.user;
          // console.log(user);
          signInWhenCreate(email, password , name);
          const user ={
            name: name,
            successMessage: "createdUser",
            err: false
          }
     
        return user
        })
        .catch((error) => {
          return error.message;
          // user.err = errorMessage;
          // setUser(user);
          // console.log(errorCode);
          // console.log(errorMessage);
          // ..
        });
}

// update name and sign in user
const signInWhenCreate = (email , password , name)=>{
    
    signInWithEmailAndPassword(auth, email, password )
  .then(() => {
    // Signed in 
   ;
    callbackUpdate(name)
    .then( )
    

  })
  .catch((error) => {
    // const errorCode = error.code;
    // user.err = errorMessage;
    // setUser(user);
  });
}

// callback update function 

const callbackUpdate = (name)=>{
   updateProfile(auth.currentUser, {
    displayName: name
  }).then(() => {
console.log("Profile updated!");
 

  }).catch((error) => {

  });
}

// signInEmailPass
export const handleSignInWithEmailAndPass = (email, password)=>{
 return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const userAuth = userCredential.user;
    const user ={
      name: userAuth.displayName,
      successMessage: "SignedIn",
      err: false
    }
    return user

  })
  .catch((error) => {
    return  error.message;
   
  });

}