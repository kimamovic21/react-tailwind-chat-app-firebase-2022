import React from 'react';
import { auth } from '../firebase';

const style = {
    message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    name: `absolute mt-[-4rem] text-gray-600 text-xs`,
    sent: `bg-[#395dff] text-[#efefef] flex-row-reverse text-end float right rounded-bl-full`,
    received: `bg-[#e5e5ea] text-[#0f0f0f] float-right rounded-br-full`,
};

const Message = ({message}) => {

  const messageClass = 
  message.uid === auth.currentUser.uid 
  ? `${style.sent}` 
  : `${style.received}`

  return (
    <div>

        {/* <div className={style.message}> */}
        <div className={`${style.message} ${messageClass}`}>
            {/* <p className={style.name}>Kerim</p> */}
            <p className={style.name}>{message.name}</p>
            {/* <p>I'm learning React</p>  */}
            <p>{message.text}</p>
        </div>

    </div>
  );
};

export default Message;





// 1. unutar roditelj div elementa dodajemo div element
// 2. div elementu dodajemo klasu
// 3. unutar div elementa dodajemo p element
// 4. p elementu dodajemo klasu
// 5. dodajemo {message} unutar Message() jsx funkcije
// 6. dodajemo const messageClass
// 7. importujemo auth
