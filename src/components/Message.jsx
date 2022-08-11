import React from 'react';

const style = {
    message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    name: `fixed mt-[-4rem] text-gray-600 text-xs`,
    sent: `bg-[#395dff] text-[#efefef] flex-row-reverse text-end float right rounded-bl-full`,
    received: `bg-[#e5e5ea] text-[#0f0f0f] float-right rounded-br-full`,
}

const Message = () => {
  return (
    <div>

        <div className={style.message}>
            <p className={style.name}>Kerim</p>
            <p>I'm learning React</p>
        </div>

    </div>
  )
}

export default Message;




// 1. unutar roditelj div elementa dodajemo div element
// 2. div elementu dodajemo klasu
// 3. unutar div elementa dodajemo p element
// 4. p elementu dodajemo klasu
// 5. 