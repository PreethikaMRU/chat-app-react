import { collection, limit, onSnapshot, orderBy, query} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import Message from "./Message";
import Sendmessage from "./SendMessage";

function Chatbox(){
    const [messages,setMessages] = useState([]);
    const scroll = useRef();
    useEffect (() => {
        const q = query(collection(db,"messages"),orderBy("createdAt"),limit(50));
        const unsubscribe = onSnapshot(q,(QuerySnapshot) => {
            let msg =[];
            QuerySnapshot.forEach((doc) => {
                msg.push({...doc.data(),id:doc.id});
            });
            setMessages(msg);
        });
        return () => unsubscribe;
    },[]);
    return(
        <div className="ChatBox">
            <div className="Messagecontainer">
                {messages?.map((m) => (
                    <Message key={m.id} message={m}/>
                ))}
            </div>
            <div ref={scroll}></div>
            <Sendmessage scroll={scroll}/>
        </div>
    );
}

export default Chatbox;