import { useState, useEffect } from 'react';
import { auth } from './config';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import NavBar from './components/NavBar';
import Spinner from './components/Spinner';
import './App.css';


const App = () => {
   const [user] = useAuthState(auth);
   const [currentRoom, setCurrentRoom] = useState("Lobby");
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 2000);
   }, []);

   return (
      <div className="app">
         {loading && <Spinner />}
         <NavBar
            user={user}
            currentRoom={currentRoom}
            setCurrentRoom={setCurrentRoom}
         />
         <div className="content">
            {user ? <ChatRoom currentRoom={currentRoom} /> : <Login />}
         </div>
      </div>
   );
};

export default App;
