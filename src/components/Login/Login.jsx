import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../utilities/validators/validator'


const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} component={Input} name={'login'} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} component={Input} name={'password'} validate={[required]}/>
            </div>
            <div>
                <Field type={'checkbox'} component={"input"} name={'rememberMe'} validate={[required]}/> remember me
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