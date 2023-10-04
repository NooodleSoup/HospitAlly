// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Auth, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMb2ALw3MsAHUs9T4THcLry7i7GrExuOU",
  authDomain: "hospitally-1703.firebaseapp.com",
  projectId: "hospitally-1703",
  storageBucket: "hospitally-1703.appspot.com",
  messagingSenderId: "659403417063",
  appId: "1:659403417063:web:2c1a43dae374d7bb0d8942",
  measurementId: "G-FZHHBXLK4Q"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();

export const firestore: Firestore = getFirestore(firebaseApp);
export const storage: FirebaseStorage = getStorage(firebaseApp); 

export const googleSignIn = async () => {
  await signInWithPopup(auth, googleProvider)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const signOutUser = async () => {
  await signOut(auth)
    .then(() => {
      console.log("User signed out");
    })
    .catch((error) => {
      console.error(error);
    });
};
