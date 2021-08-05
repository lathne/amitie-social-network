/* eslint-disable import/named */
/* eslint-disable import/no-cycle */
/* eslint-disable no-alert */
import { changePage } from '../router.js';

const getUser = () => firebase.auth().currentUser;

const updateUser = async (name) => {
  const user = await getUser();
  user.updateProfile({
    displayName: name,
  });
};

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      changePage('/');
      console.log(result);
    }).catch((error) => {
      alert('Falha de Registro');
      console.log(error);
    });
};

const signUpWithGoogle = () => {
  const providerSignUp = new firebase.auth.GoogleAuthProvider();
  providerSignUp.addScope('profile');
  providerSignUp.addScope('email');
  firebase.auth().signInWithPopup(providerSignUp)
    .then((result) => {
      changePage('/');
      console.log(result);
    }).catch((error) => {
      alert('Falha de Registro');
      console.log(error);
    });
  return providerSignUp;
};

const signIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

const signUp = async (name, email, password) => {
  const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
  updateUser(name);
  return user;
};

const signOut = () => firebase.auth().signOut();

export default {
  getUser, updateUser, signInWithGoogle, signUpWithGoogle, signIn, signUp, signOut,
};
