import React, { useState } from "react";
import "./chat.scss";
const Chat = () => {
  const [chat, setChat] = useState(true)
  return (
    <div className="chat">
      <div className="messages">
        <h1>Conversations</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="user">John Doe</span>
          <p className="text">Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="user">John Doe</span>
          <p className="text">Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="user">John Doe</span>
          <p className="text">Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="user">John Doe</span>
          <p className="text">Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="user">John Doe</span>
          <p className="text">Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span className="user">John Doe</span>
          <p className="text">Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat &&(<div className="chatbox">
        <div className="top">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            John Doe
          </div>
          <span className="close" onClick={()=>setChat(null)}>X</span>
        </div>
        <div className="center">
          <div className="chatMessage">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <span>1 hour  ago</span>
          </div>
          <div className="chatMessage own">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <span>1 hour  ago</span>
          </div>
          <div className="chatMessage">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <span>1 hour  ago</span>
          </div>
          <div className="chatMessage own">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <span>1 hour  ago</span>
          </div>
          <div className="chatMessage">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <span>1 hour  ago</span>
          </div>
          <div className="chatMessage own">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <span>1 hour  ago</span>
          </div>
        </div>
        <div className="bottom">
          <textarea></textarea>
          <button>Send</button>
        </div>
      </div>)}
    </div>
  );
};

export default Chat;
