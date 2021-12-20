import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/appSlice'
import './login.css'

const Login = () => {
    const dispatch = useDispatch();

    const signIn =() => {
        // implement login here

        // dispatch login actions if axios request login success of failed
        dispatch(login({
            username : "Isaac",
            profilePic : "isaac/jpg",
            id : "34vsd3"
        }))

        // else alert error message on error login
    }

    return (
        <div className="login">
            <div className="login_container">
                
                <img src="https://scx2.b-cdn.net/gfx/new/2017/1-snapchat.jpg" alt="" />
                
                <Button variant="outlined" onClick={signIn} >Sign in</Button>
            </div>
        </div>
    )
}

export default Login
