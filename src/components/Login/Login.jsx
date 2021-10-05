import React from 'react'
import { Field, reduxForm } from 'redux-form'


const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} component={'input'} name={'login'} />
            </div>
            <div>
                <Field placeholder={"Password"} component={'input'} name={'password'} />
            </div>
            <div>
                <Field type={'checkbox'} component={'input'} name={'rememberMe'} /> remember me
            </div>
            <div>
                <button>LogIn</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1> LOGIN </h1>
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    </div>
}

export default Login