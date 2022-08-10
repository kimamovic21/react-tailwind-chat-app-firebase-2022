import React from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Signin from './Signin';
import Signout from './Signout';

const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-[#efefef] text-3xl`
}

const Navbar = () => {

  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className={style.nav}>

        <h1 className={style.heading}>Chat App</h1>
        
        {user ? <Signout /> : <Signin />}

    </div>
  )
}

export default Navbar;





// 1. dodajemo klasu roditelj div elementu
// 2. dodajemo stle varijablu
// 3. dodajemo h1 element
// 4. h1 elementu dodajemo klasu
// 5. importujemo {auth}
// 6. importujemo {useAuth State}
// 7. dodajemo const user
// 8. ispod h1 elementa importujemo Signin.jsx komponentu
// 9. importujemo Signout.jsx komponentu
// 10. dodajemo ternarni operator
// 11. 

