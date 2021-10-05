import classes from './FormsControls.module.css'




export const Textarea = ({ input, meta, ...props }) => {

    const isError = meta.touched && meta.error

    return (
        <div className={classes.formControl + '' + (isError ? classes.error : "")}>
            <div>
                <textarea {...input} {...props}></textarea>
            </div>
            <div>
                { isError && <span>{meta.error}</span>}
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
                { isError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}