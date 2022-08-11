import React from 'react';
import GoogleButton from 'react-google-button';
import {auth} from '../firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const style = {
    wrapper: `flex justify-center`
}

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

const Signin = () => {
  return (
    <div className={style.wrapper}>
        <GoogleButton onClick={googleSignIn}/>
    </div>
  );
};

export default Signin;



// 1. dodajemo klasu roditelj div elementu
// 2. dodajemo Google dugme komponentu
// 3. dodajemo const style 
// 4. dodajemo googleSignIn fukciju
// 5. 


