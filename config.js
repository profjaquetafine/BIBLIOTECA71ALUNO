import firebase from 'firebase';
require("@firebase/firestore");

//troque as configurações do seu banco de dados
const firebaseConfig = {
  apiKey: "AIzaSyB4d1XwfrH7xIa3Do3pPGK4RfFfvhEXtPc",
  authDomain: "bibliotecaeletronica-44624.firebaseapp.com",
  projectId: "bibliotecaeletronica-44624",
  storageBucket: "bibliotecaeletronica-44624.appspot.com",
  messagingSenderId: "743606311658",
  appId: "1:743606311658:web:3f164e29f0e42531121593"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
