import { auth } from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";

function Message({message}){
    const [user] = useAuthState(auth);
    return(
        <div className={`Chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
            <img className="Chat-bubble-left" src={message.avatar} alt="user-pic"></img>
            <div className="Chat-bubble-right">
                <small className="username">{message.name}</small>
                <p className="usermessage">{message.text}</p>
                <small className="date">{message.date}</small>
            </div>
        </div>
    );
}

export default Message;