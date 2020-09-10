const firebase = require('firebase/app')//importando o firebase
require('firebase/auth')//importando o metodo de autenticaçao do firebase 

const firebaseConfig = {
    apiKey: "AIzaSyDoXDuCTHBEEKCS_CTRXFQ1Yop-4j2lHp8",
    authDomain: "teste-32c2d.firebaseapp.com",
    databaseURL: "https://teste-32c2d.firebaseio.com",
    projectId: "teste-32c2d",
    storageBucket: "teste-32c2d.appspot.com",
    messagingSenderId: "688562601321",
    appId: "1:688562601321:web:db3b8513a1d99f8ff911f8",
    measurementId: "G-W6GYDHSPJL"
};

firebase.initializeApp(firebaseConfig);


exports.addUser = (email,password) =>{
    firebase.auth().createUserWithEmailAndPassword(email,password)//criando usuario com email e senha 
}

exports.signUser = (email,password) =>{
    firebase.auth().signInWithEmailAndPassword(email,password)//autenticando usuario
}