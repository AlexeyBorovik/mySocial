import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { reduxForm } from 'redux-form'
import { login } from '../../Redux/auth-reducer'
import { createField, Input } from '../common/FormsControls/FormsControls'
import { required } from '../utilities/validators/validator'
import style from './../common/FormsControls/FormsControls.module.css'


const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return <div>
        <form onSubmit={handleSubmit}>

            {createField('Email', Input, 'email', [required])}
            {createField('Password', Input, 'password', [required], { type: 'password' })}
            {createField( null, "input", 'rememberMe', [required], { type: 'checkbox' }, 'remember me')}

            {captchaUrl && <img alt='' src={captchaUrl} />}
            {captchaUrl && createField('Symbols from image', Input, 'captcha', [required])}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>}

            <div>
                <button>LogIn</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = ({isAuth , captchaUrl, login}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1> LOGIN </h1>
        <div>
            <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
        </div>
    </div>
}


const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { login })(Login)
