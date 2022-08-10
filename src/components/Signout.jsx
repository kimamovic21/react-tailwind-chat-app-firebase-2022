import React from 'react';
import {auth} from '../firebase';

const style = {
    button: `bg-gray-200 px-2 py-2 hover:bg-gray-100 cursor-pointer rounded-md`
}

const signOut = () => {
    signOut(auth);
}

const Signout = () => {
  return (
    <button className={style.button}
            onClick={() => auth.signOut()}>
        Sign out
    </button>
  )
}

export default Signout;




// 1. button roditelj elementu dodajemo klasu
// 2. dodajemo const style
// 3. importujemo {auth}
// 4. dodajemo funkciju signOut