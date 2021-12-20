import React , {useEffect} from 'react'
import "./preview.css";
import { useDispatch,useSelector } from 'react-redux';
import { resetCameraImage, selectCameraImage } from './features/cameraSlice';
import { useHistory } from 'react-router';
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
import NoteIcon from '@mui/icons-material/Note';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CropIcon from '@mui/icons-material/Crop';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import TimerIcon from '@mui/icons-material/Timer';
import SendIcon from '@mui/icons-material/Send';
// import {v4 as uuid} from 'uuid'

const Preview = () => {
    const cameraImage = useSelector(selectCameraImage)
    const history = useHistory();
    const dispatch = useDispatch()

    useEffect(() => {
        if(!cameraImage ){
            history.push('/')
            // console.log(cameraImage)
        }
    }, [cameraImage , history])


    const closePreview = () => {
        dispatch(resetCameraImage())
        history.replace('/')
    }

    const sendPost = () => {
        // alert('snap me')
        // const id = uuid();

        // save the image in the database using the uuid as the unique name of the image
        
        // use the react upload progresss monitor function


        // if upload successful for the user; then redirect to /chats
        history.push('/chats')

    }

    return (
        <div className="preview">
            <CloseIcon onClick={closePreview}  className="preview_close"/>
            <div className="preview_toobalright">
                 <TextFieldsIcon/>
                 <CreateIcon/>
                 <NoteIcon/>
                 <MusicNoteIcon/>
                 <AttachFileIcon/>
                 <CropIcon/>
                 <TimerIcon/>
            </div>

            <img src={cameraImage} alt=""  />

            <div onClick={sendPost} className="preview_footer">
                <h2>Send Now</h2>
                <SendIcon fontSize="small" className="preview_sendicon" />
            </div>

        </div>
    )
}

export default Preview
