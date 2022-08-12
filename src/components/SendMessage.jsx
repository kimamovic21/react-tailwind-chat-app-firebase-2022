import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, {useState} from 'react';
import {auth, db} from '../firebase';

const style = {
    form: `h-10 w-full max-w-[728px] flex text-xl p-1 mb-[-5px]`,
    input: `w-full text-xl p-3 bg-gray-900 text-[#efefef] outline-none border-none rounded-md`,
    button: `w-[20%] bg-green-500 text-[#efefef] rounded-md`,
}

const SendMessage = ({scroll}) => {

  const [input, setInput] = useState('');
 
  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === '') {
        alert('Please enter a valid message');
        return;
    };
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    });
    setInput('');
    scroll.current.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>

        <input value={input}
               onChange={(e) => setInput(e.target.value)}
               className={style.input} 
               type="text" 
               placeholder='Message'       
        />

        <button className={style.button} 
                type='submit'>
            Send
        </button>

    </form>
  );
};

export default SendMessage;





// 1. roditelj form elementu dodajemo klasu
// 2. dodajemo input element
// 3. dodajemo button element
// 4. dodajemo klase elementima
// 5. dodajemo const style
// 6. dodajemo useState react hook
// 7. input elementu dodajemo value 
// 8. input elementu dodajemo onChange dogadaj
// 9. kreiramo sendMessage funkciju
// 10. form elementu dodajemo onSubmit dogadaj
// 11. dodajemo {scroll} u SendMessage jsx funkciju

