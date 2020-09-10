const firebase = require('firebase/app')//importando o firebase
require('firebase/auth')//importando o metodo de autenticaçao do firebase 

const firebaseConfig = {
    apiKey: //apiKey,
    
};

firebase.initializeApp(firebaseConfig);


exports.addUser = (email,password) =>{
    firebase.auth().createUserWithEmailAndPassword(email,password)//criando usuario com email e senha 
}

exports.signUser = (email,password) =>{
    firebase.auth().signInWithEmailAndPassword(email,password)//autenticando usuario
}