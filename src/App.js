import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import { auth } from './config';
import './App.css';


function App() {
   const [user] = useAuthState(auth);
   console.log(user);
   return (
      <div className="App">
         <div>{user ? <ChatRoom /> : <Login />}</div>
      </div>
   );
}

export default App;
