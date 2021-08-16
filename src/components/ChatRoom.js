import { useState } from "react";
import { db, auth, firebaseRef } from "../config";

const ChatRoom = () => {
   const [message, setMessage] = useState('');

   const messages = [{ uid, photoURL, createdAt, text, room }];
   const messageRef = db.collection('messages');

   return (
      <div className='messages'>
         <form onSubmit={handleSubmit}>
            <textarea
               value={messages}
               onChange={(e) => setMessage(e.target.value)}
               placeholder='Enter message'
            />
            <button type='submit' disabled={!message}>
               send
            </button>
         </form>
      </div>
   );
};

export default ChatRoom;
