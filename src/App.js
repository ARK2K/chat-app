import "./App.css";
import firebase from "firebase";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyB3zeX9_eln3aJL9HpcdjkLOPFgqv7TCuo",
  authDomain: "chat-app-ba589.firebaseapp.com",
  projectId: "chat-app-ba589",
  storageBucket: "chat-app-ba589.appspot.com",
  messagingSenderId: "1040595781834",
  appId: "1:1040595781834:web:bce87014c61c1dddb28c33",
});

const auth = firebase.auth(),
  firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header"></header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

function SignOut() {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}

function ChatRoom() {}

export default App;
