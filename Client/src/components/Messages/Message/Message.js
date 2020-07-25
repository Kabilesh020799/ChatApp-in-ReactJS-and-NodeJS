import React from 'react'
import ReactEmoji from 'react-emoji'

import'./Message.css';

const Message = ({message,name}) => {
    let isSentByCurrentUser = false;
    const trimName = name.trim().toLowerCase();
    if(message.user === trimName){
        isSentByCurrentUser = true;
    }
    return (
        isSentByCurrentUser ? (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimName}</p>
                <div className="messageBox backgroundBlue">
                    <div className="messageText colorWhite">{ReactEmoji.emojify(message.text)}</div>
                </div>
            </div>
        ) : (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <div className="messageText colorDark">{ReactEmoji.emojify(message.text)}</div>
                </div>
                <p className="sentText pl-10">{message.user}</p>
            </div>
        )
    )
}

export default Message;