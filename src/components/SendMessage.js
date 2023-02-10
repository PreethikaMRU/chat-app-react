import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { auth,db } from "../firebase";

function Sendmessage({scroll}){
    const[message,setMessage]=useState("");
    /*On submit creates/adds a new document to the collection db*/
    const submitMessage = async(e) => {
        e.preventDefault();
        if(message.trim()===""){
            alert("Enter message");
            return;
        }
        const {uid,displayName,photoURL} = auth.currentUser;
        const date = new Date();
        await addDoc(collection(db,"messages"),{
            text:message,
            name:displayName,
            avatar:photoURL,
            createdAt:serverTimestamp(),
            date:date.toLocaleDateString(),
            uid,
        });
        setMessage(" ");
        scroll.current.scrollIntoView({ behavior: "smooth" });
    }
    return(
        <form onSubmit={(e) => submitMessage(e)} className="userinput">
            <input type={Text} placeholder="Type here..." value={message} onChange={(e)=>setMessage(e.target.value)}></input>
            <button type="submit">Send</button>
        </form>
    );
}

export default Sendmessage;