import app from "next/app";
import 'firebase/auth';

import firebaseConfig from "./config";

class Firebase {
    constructor() {
        if(!app.apps.length) {
            app.initializeApp(firebaseConfig)
        }
        this.auth = app.auth();
    };

    //funcion registra usuario
    async registrar(nombre, email, password) {
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);
        return await nuevoUsuario.user.updateProfile({
            displayName: nombre
        });
    };

    //inicia sesion usuario
    async login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    };

    //cerrar sesión
    async cerrarSesion() {
        await this.authsignOut();
    }

};

const firebase = new Firebase();
export default firebase;