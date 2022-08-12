import React, {useState, useEffect, useRef} from 'react';
import Message from './Message';
import {query,collection, onSnapshot, orderBy} from 'firebase/firestore';
import {db} from '../firebase';
import SendMessage from './SendMessage';

const style = {
    main: `flex flex-col p-[10px] relative`
}

const Chat = () => {

  const [messages, setMessages] = useState([]);

  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'))
    const unsbuscribe = onSnapshot(q, (querySnapshot) => {
        let messages = []
        querySnapshot.forEach((doc) => {
            messages.push({...doc.data(), id:doc.id})
        });
        setMessages(messages)
    });
    return () => unsbuscribe();
  }, []);

  return (
    <>

      <main className={style.main}>

            {/* Chat message component */}
            {messages && messages.map((message) => (
                <Message key={message.id}
                         message={message} 
                />
            ))}
         
      </main>
      
            {/* Send message component */}
            <SendMessage scroll={scroll} />
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
// 7. dodajemo useState React hook
// 8. dodajemo useEffect React hook
// 9. importujemo db
// 10. unutar main elementa dodajemo map js metodu
// 11. importujemo SendMessage.jsx komponentu

