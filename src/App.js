import React from "react";
import Navbar from "./components/Navbar";
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Chat from "./components/Chat";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center h-screen mt-10`,
  sectionContainer: `flex flex-col h-screen mt-[-10px]`,
}

function App() {

  const [user] = useAuthState(auth);
 // console.log(user); 

  return (
    <div className={style.appContainer}>

      <section className={style.sectionContainer}>
          <Navbar />
          {user ? <Chat/> : null}
          {/* <Chat /> */}
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
// 9. importujemo Chat.jsx komponentu
// 10. dodajemo ternarni operator za user
