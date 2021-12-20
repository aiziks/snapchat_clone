import { Avatar } from '@mui/material'
import React from 'react'
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './chat.css'
import StopRoundedIcon from '@mui/icons-material/StopRounded'
import { selectImage } from './features/appSlice'

// install at tutorial time 2hr 9min - npm install react-timeago
const Chat = ({ read , imageUrl }) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const open = () => {
        if (!read){
            dispatch(selectImage(imageUrl))
            // change read to true in the DB

            history.push('/chat/view')
        }
    }


    return (
        <div onClick={open} className="chat">
            <Avatar className="chat_avatar" src="" />
            <div className="chat_info">
                <h4>adedayo(username)</h4>
                <p>
                    {!read && "Tap to view"}{" "}
                {/* <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} /> */}
                </p>
            </div>

            {/* {!read && <StopRoundedIcon className="chat_readicon" /> } */}
             <StopRoundedIcon  className="read_icon" /> 
        </div>
    )
}

export default Chat
