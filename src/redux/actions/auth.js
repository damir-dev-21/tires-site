import axios from "axios";
import React from "react";
import { AUTH_OVER, AUTH_START } from "./actionType";

export function auth(email, password, username, isLogin) {
    return async (dispatch) => {
        const url = "http://127.0.0.1:8000/api"

        let newData = {
            email,
            password,
            username
        }

        const expirationDate = new Date(new Date().getTime() + new Date().getDate() * 1000);


        if(isLogin){
            newData = {
                email,
                password
            }
            const responce = await axios.post(url+"/login/",newData)
            const data = responce.data
            console.log(data);
            localStorage.setItem('token', data.jwt);
            localStorage.setItem('userId', data.user.id);
            localStorage.setItem('expirationDate', expirationDate);
    
            dispatch(authStart(data.idToken,true))
            //dispatch(inLogoutTime(data.expiresIn))
        }else{
            const responce = await axios.post(url+"/register/",JSON.stringify(newData))
            const data = responce.data
            console.log(data);
        }

    }
}

export function authStart(token,isAuth){
    return{
        type:AUTH_START,
        token,
        isAuth
    }
}

export function inLogoutTime(time){
    return (dispatch) => {
        setTimeout(() => {
          dispatch(authOver());
        }, time * 1000);
      };
}

export function authOver(){
    return{
        type:AUTH_OVER
    }
}
