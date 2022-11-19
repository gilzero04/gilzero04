import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut, updateProfile } from "firebase/auth";
import { addToast } from '$lib/components/toast/store';
import { goto } from "$app/navigation";

let title: string = 'Social-Login';
let dismissible : boolean = true;
let timeout : number = 3000;

export const emailRegister = async (email: string, password: string, fullname: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            updateProfile(userCredential.user, {displayName: fullname});
            signOut(auth);
            emailSignIn(email, password);

            const user = userCredential.user;
            let message: string = 'Register successfully.';
			let type:string = 'success';
            if(user){
                // @ts-ignore
            	addToast({ title, message, type, dismissible, timeout })
			}
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            let message: string = 'Email already in use.';
			let type:string = 'warning';
            if (errorCode == 'auth/email-already-in-use'){
                // @ts-ignore
                addToast({ title, message, type, dismissible, timeout })
            }
        });
};

export const emailSignIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            let message: string = 'Signin successfully.';
			let type:string = 'success';
            if(user){
                // @ts-ignore
            	addToast({ title, message, type, dismissible, timeout })
			}
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            let message: string = 'Invalid Email or Password mismatch.';
			let type:string = 'error';
            if (errorCode == 'auth/wrong-password'){
                // @ts-ignore
                addToast({ title, message, type, dismissible, timeout })
            }
        });
};

export const authSignOut = async (redirect: string = '/signin') => {
    await signOut(auth)
        .then(() => {
            // Sign-out successful.
            goto(redirect);
            //localStorage.clear();
            let message: string = 'Signout successfully.';
			let type:string = 'success';
            // @ts-ignore
            addToast({ title, message, type, dismissible, timeout })
        })
        .catch((error) => {
            // An error happened.
            let message: string = "Can't signout.";
			let type:string = 'error';
            // @ts-ignore
            addToast({ title, message, type, dismissible, timeout })
        });
};