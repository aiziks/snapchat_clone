import React , {useRef , useCallback} from "react";
import { useDispatch } from "react-redux";
import Webcam from "react-webcam"
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { setCameraImage } from "./features/cameraSlice";
import { useHistory } from "react-router";
import "./webcamcapture.css"


const videoConstraints = {
    width : 250,
    height  : 400,
    facingMode : 'user'

}

const WebcamCapture = () => {

    // using useRef to make reference to a particular component
    const webcamRef = useRef(null)
    const dispatch = useDispatch();
    const history = useHistory();


    const capture = useCallback(() => {
        
        const imageSrc = webcamRef.current.getScreenshot(); // generates a base64 image from the screenshot

        //dispatch an action set the redux cameraImage as the payload to captured image
        dispatch(setCameraImage(imageSrc))
        history.push('/preview')

    } , [webcamRef , dispatch , history] )

 

    return (
        <div className="webcamCapture">
                <Webcam 
                    audio={false}
                    height={videoConstraints.height}
                    ref = {webcamRef}
                    screenshotFormat="image/jpeg"
                    width={videoConstraints.width}
                    videoConstraints={videoConstraints}
                />

                <RadioButtonUncheckedIcon  className="webcamCapture_button"  onClick={capture} />

        </div>
    )
}

export default WebcamCapture
