import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../Redux/auth-reducer'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../utilities/validators/validator'
import style from './../common/FormsControls/FormsControls.module.css'


const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} component={Input} name={'email'} validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"} component={Input} name={'password'} validate={[required]} />
            </div>
            <div>
                <Field type={'checkbox'} component={"input"} name={'rememberMe'} validate={[required]} /> remember me
            </div>
            
            {props.error && <div className={style.formSummaryError}>
                {props.error}
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


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1> LOGIN </h1>
        <div>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    </div>
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { login })(Login)
