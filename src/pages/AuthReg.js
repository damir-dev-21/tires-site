import '../assets/css/auth.css'

import {useState} from 'react'
import {connect} from 'react-redux'
import {auth} from '../redux/actions/auth'
import {NavLink} from 'react-router-dom'


function AuthReg({auth}) {

    const [email,setEmail] = useState('')
    const [username,setUsername] = useState('')
    const [password, setPassowrd] = useState('')

    const handleSubmit = (isLogin)=>{
        auth(email,password,username,isLogin)
    }

    return (
        <div class="auth">
            <form class="form" id="createAccount" >
                <h1 class="form__title">Создать аккаунт</h1>
                <div class="form__message form__message--error"></div>
                <div class="form__input-group">
                    <input value={username} onChange={(e)=>setUsername(e.target.value)}  required type="text" id="signupUsername" class="form__input" autofocus placeholder="Логин"/>
                        <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required id="reg_email" class="form__input" autofocus placeholder="Email"/>
                        <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input value={password} onChange={(e)=>setPassowrd(e.target.value)} type="password" required id="reg_password" class="form__input" autofocus placeholder="Пароль"/>
                        <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input type="password" required class="form__input" autofocus placeholder="Подтвердить пароль"/>
                        <div class="form__input-error-message"></div>
                </div>
                <button class="form__button" type="submit" onClick={()=>handleSubmit(false)}>Зарегистрироваться</button>
                <p class="form__text">
                    <NavLink class="form__link" to="/" id="linkLogin">Уже есть аккаунт? Войти</NavLink>
                </p>
            </form>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return{
        auth: (email,password,username,isLogin)=>dispatch(auth(email,password,username,isLogin))
    }
}

export default connect(mapDispatchToProps)(AuthReg)