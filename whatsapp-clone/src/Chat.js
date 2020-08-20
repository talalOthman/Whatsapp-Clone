import React, {useEffect, useState} from 'react';
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined} from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

import "./Chat.css";

function Chat() {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');

    const sendMessage = (e) =>{
        e.preventDefault();
        console.log(input);
        setInput("");

    };

    useEffect(() => {
        return () => {
            setSeed(Math.floor(Math.random() * 5000));
        }
    }, [])
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && `chat__reciever`}`}>
                <span className="chat__name">Talal Othman</span>
                    Hey
                <span className="chat__timestamp">3:53pm</span>
                </p>
                
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
