import './App.css';
import Chatbox from './components/ChatBox';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import { auth } from './firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

function App() {
  const [user] = useAuthState(auth);

  const handleLogin = (value) =>{
    if(value==="login"){
      const provider = new GoogleAuthProvider();
      signInWithRedirect(auth,provider);
    }
    else if(value==="logout"){
      auth.signOut();
    }
  }
  return (
    <div className="App">
      <NavBar login={user} loginFunction={handleLogin}/>
      {!user ? <Welcome loginFunction={handleLogin}/>:<Chatbox />}
    </div>
  );
}

export default App;
