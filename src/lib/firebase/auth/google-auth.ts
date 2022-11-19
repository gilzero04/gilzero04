import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider , signOut } from "firebase/auth";
import { goto } from "$app/navigation";
import { addToast } from '$lib/components/toast/store';

let title: string = 'Social-Login';
let dismissible : boolean = true;
let timeout : number = 3000;

export const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            let message: string = 'Signin successfully.';
			let type:string = 'success';
            if(user){
                // @ts-ignore
            	addToast({ title, message, type, dismissible, timeout })
			}
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            let message: string = "Can't signin with Google provider.["+errorCode+']';
            let type:string = 'warning';
            addToast({ title, message, type, dismissible, timeout })
        });
};

export const authSignOut = async (redirect: string = '/signin') => {
    await signOut(auth)
        .then(() => {
            // Sign-out successful.
            console.log('Sign-out successful');
            goto(redirect);
            //localStorage.clear();
        })
        .catch((error) => {
            // An error happened.
            console.log('An error happened.');
        });
};