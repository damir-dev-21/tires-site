import '../assets/css/auth.css'

import { useState } from 'react'
import { connect } from 'react-redux'
import { auth } from '../redux/actions/auth'
import { NavLink, Navigate } from 'react-router-dom'


function AuthLogin({ auth }) {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassowrd] = useState('')
    const [redirect, setRedirect] = useState(false)

    const handleSubmit = (isLogin) => {
        auth(email, password, username, isLogin)
        setRedirect(true)

    }

    if (redirect) {
        return <Navigate to="/" />
    } else {

        return (
            <div class="auth">
                <div class="form" id="login" >
                    <h1 class="form__title">Войти</h1>
                    <div class="form__message form__message--error"></div>
                    <div class="form__input-group">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} id="login_email" required type="text" class="form__input" autofocus placeholder="Email" />
                        <div class="form__input-error-message"></div>
                    </div>
                    <div class="form__input-group">
                        <input value={password} onChange={(e) => setPassowrd(e.target.value)} id="login_password" required type="password" class="form__input" autofocus placeholder="Password" />
                        <div class="form__input-error-message"></div>
                    </div>
                    <button class="form__button" type="submit" onClick={() => handleSubmit(true)}>Войти</button>
                    <p class="form__text">
                        <a href="#" class="form__link">Забыли пароль?</a>
                    </p>
                    <p class="form__text">
                        <NavLink class="form__link" to="/reg" id="linkCreateAccount">Нету аккаунта? Создать аккаунт</NavLink>
                    </p>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        auth: (email, password, username, isLogin) => dispatch(auth(email, password, username, isLogin))
    }
}

export default connect(null, mapDispatchToProps)(AuthLogin)