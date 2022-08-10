import React from "react";
import Navbar from "./components/Navbar";
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-200 mt-10 shadow-xl border relative`,
}

function App() {

  const [user] = useAuthState(auth);
 // console.log(user); 

  return (
    <div className={style.appContainer}>

      <section className={style.sectionContainer}>
       
          <Navbar />



      </section>

    </div>
  );
}

export default App;




// 1. dodajemo klasu roditelj div elementu
// 2. dodajemo section element
// 3. section elementu dodajemo klasu
// 4. dodajemo const style varijablu 
// 5. importujemo Navbar.jsx komponentu
// 6. importujemo auth
// 7. importujemo react firebase hook
// 8. dodajemo const user
// 9. 