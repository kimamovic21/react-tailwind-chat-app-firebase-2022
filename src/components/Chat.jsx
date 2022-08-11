import React, {useState, useEffect, useRef} from 'react';
import Message from './Message';

const style = {
    main: `flex flex-col p-[10px] relative`
}

const Chat = () => {

  const scroll = useRef()

  return (
    <>

      <main className={style.main}>
            {/* Chat message component */}
            <Message />
      </main>
            {/* Send message component */}
      <span ref={scroll}></span>
      
    </>
  );
};

export default Chat;




// 1. roditelj main elementu dodajemo klasu
// 2. dodajemo const style
// 3. dodajemo span element sa ref atributom
// 4. importujemo useState, useEffect, useRef reack hooks
// 5. dodajemo const scroll
// 6. importujemo Message.jsx komponentu
// 7. 
