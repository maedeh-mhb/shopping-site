


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,
signInWithPopup,
signInWithRedirect,
GoogleAuthProvider,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
onAuthStateChanged,
signOut
} from 'firebase/auth';
import {getFirestore,
getDoc,
setDoc,
doc, collection, writeBatch,
query,
getDocs
 } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASf-l5bHELvzooXcrgmMVHYXU1j-DXYY4",
  authDomain: "crown-shopping-db-1a8ea.firebaseapp.com",
  projectId: "crown-shopping-db-1a8ea",
  storageBucket: "crown-shopping-db-1a8ea.appspot.com",
  messagingSenderId: "865330671368",
  appId: "1:865330671368:web:187d3da138d26a435486bd",
  measurementId: "G-G57J29TJ00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:'select_account'
});

export const auth= getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

// connecting to database
export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
 
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

// get authentication data and store in firestore 
export const createUserDocFromAuth =async (userAuth,additionalInfo={}) =>{
    const userDocRef=doc(db,'users',userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try {
        setDoc(userDocRef,{
          displayName,
          email,
          createdAt,
          ...additionalInfo
        })
      }
      catch (error) {
        console.log("adding user failed")
      }
    }
    return userDocRef;
  }

  export async function createAuthWithEmailAndPassword(email,password) {
    if(!email || !password) {
      return;
    }
    return await createUserWithEmailAndPassword(auth,email,password)
  };

  export async function signInAuthWithEmailAndPassword(email,password) {
    if(!email || !password) {
      return;
    }
    return await signInWithEmailAndPassword(auth,email,password)
  }

  export  function onAuthChange(callback) {
     onAuthStateChanged(auth,callback);
  }
  export async function onSignOut() {
      signOut(auth)
  }