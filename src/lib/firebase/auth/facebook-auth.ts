import { auth } from "./firebase";
import { signInWithPopup, FacebookAuthProvider , signOut } from "firebase/auth";
import { goto } from "$app/navigation";
import { addToast } from '$lib/components/toast/store';

let title: string = 'Social-Login';
let dismissible : boolean = true;
let timeout : number = 3000;

export const facebookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
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
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);
            let message: string = "Can't signin with Facebook provider.["+errorCode+']';
            let type:string = 'warning';
            addToast({ title, message, type, dismissible, timeout });
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