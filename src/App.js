import React , {useEffect} from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {BrowserRouter as Router , Route ,  Switch} from 'react-router-dom'
import Preview from './Preview';
import Chats from './Chats';
import ChatView from './ChatView';
import {  useSelector } from 'react-redux';
import { selectUser } from './features/appSlice';


function App() {
  const user = useSelector(selectUser);

  useEffect(() => {

    // dispatch a token to check validity of the user redirect the user to dashboard
    if(user){


    }else{
      // dispatch logout action
    }

  }, [user])

  return (
    <div className="App">
      

      <Router>
        {/* {!user ? (
          <Login />
        ) : 
          
        ( */}
        <>
          <img 
            className="app_logo"
            src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg" 
            alt="" 
            width="100px" height="100px"
          />

        <div className="app_body">
          <div className="app_bodybg">

        <Switch>
          <Route  path="/chat/view">
            <ChatView />
          </Route>
          <Route  path="/chats">
            <Chats />
            </Route>
          <Route  path="/preview">
            <Preview />
            </Route>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
        </Switch>
          
          </div>
        </div>
        </>

        {/* )} */}
        
    </Router>


      
    </div>
  );
}

export default App;
