import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAovSNBc9VnB1_EzKCV7aIuO_eOiTZI5KU",
  authDomain: "duniya-a61ce.firebaseapp.com",
  databaseURL: "https://duniya-a61ce.firebaseio.com",
  projectId: "duniya-a61ce",
  storageBucket: "duniya-a61ce.appspot.com",
  messagingSenderId: "282517486660",
  appId: "1:282517486660:web:7701951d9c02f78d759011",
  measurementId: "G-CMMLT2ZPBL"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating User!!", error);
    }
  }
  return userRef;
};

export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch();

  objectToAdd.forEach(obj=>{
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}

export const convertCollectionSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc=>{
    const {title,items} = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  return transformedCollection.reduce((accumulator, collection)=>{
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  },{})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
