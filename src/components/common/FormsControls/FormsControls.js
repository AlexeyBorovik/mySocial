import { Field } from 'redux-form'
import classes from './FormsControls.module.css'


export const Textarea = ({ input, meta, ...props }) => {

    const isError = meta.touched && meta.error

    return (
        <div className={classes.formControl + '' + (isError ? classes.error : "")}>
            <div>
                <textarea {...input} {...props}></textarea>
            </div>
            <div>
                {isError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}


export const Input = ({ input, meta, ...props }) => {

    const isError = meta.touched && meta.error

    return (
        <div className={classes.formControl + '' + (isError ? classes.error : "")}>
            <div>
                <textarea {...input} {...props}></textarea>
            </div>
            <div>
                {isError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}


export const createField = (placeholder, component, name, validate, props={}, text = '') => (
    <div>
    <Field placeholder={placeholder} component={component} name={name} validate={validate} {...props} /> {text}
    </div>
)