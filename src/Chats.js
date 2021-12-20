// import React , {useEffect , useState} from 'react'
import React , {useEffect } from 'react'
import './chats.css'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Chat from './Chat';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectUser } from './features/appSlice';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useHistory } from 'react-router';
// import { resetCameraImage } from './features/cameraSlice';


const Chats = () => {
    // const [ posts , setPosts ] = useState([]);
    // const user = useSelector(selectUser);
    // const dispatch = useDispatch()
    const history = useHistory();

    // useEffect fetch new posts
    useEffect(() => {
        //fetch the latest posts in DB and initialize the posts state

        // setPosts(['list of posts'])

    })

    const takeSnap =() => {
        // dispatch(resetCameraImage());
        history.push('/')
    }

    return (
        <div className="chats">
            
            <div className="chats_header" >
               
                <Avatar src="" onClick={ () => {} } className="chats_avatar"  />
                
                <div className="chats_search" >
                    <SearchIcon className="chats_search_icon"/>
                    <input type="text" placeholder="Friends" />
                </div>

                <ChatBubbleIcon className="chats_chatIcon" />
            </div>

            <div className="chats_posts">
                {/* load the posts retrieve here */}
                
                <Chat 
                    key=""
                    id="sdffsd"
                    username=""
                    timestamp=""
                    imageUrl=""
                    read=""
                    profilePic=""                
                />

            </div>

            <RadioButtonUncheckedIcon  className="chat_takepic"  onClick={takeSnap} fontSize="large" />
            
        </div>
    )
}

export default Chats
