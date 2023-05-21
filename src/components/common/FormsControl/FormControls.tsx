import React, {ComponentType, DetailedHTMLProps, FC, PropsWithChildren, ReactHTMLElement, ReactNode} from "react";
import style from './FormControls.module.css'
import {Field, WrappedFieldProps} from "redux-form";
import {FieldValidatorType, required} from "../../../utils/validators/validators";

const FormControl: FC<Props> = ({
                                    input,
                                    type,
                                    meta,
                                    ...props
                                }) => {

    return (
        <div className={`${style.formControl} ${meta.touched && meta.error ? style.error : ""}`}>
            <div>
                {props.children}
            </div>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
}

type Props = {
    input: DetailedHTMLProps<any, HTMLTextAreaElement>
    type: string
    children: ReactNode
    meta: any
    props: {}
}

export const TextArea: FC<Props> = (props) => {
    const {input, meta, children, ...restProps} = props
    return (
        <FormControl {...props} >
            <textarea {...input} {...restProps}/>
        </FormControl>

    )
}

export const Input: FC<Props> = (props) => {
    const {input, meta, children, ...restProps} = props
    return (
        <FormControl {...props} >
            <input {...input} {...restProps}/>
        </FormControl>
    )
}

export const createField = (placeholder: string | null,
                            name: string,
                            component: React.FC<Props & any>,
                            validator: FieldValidatorType[],
                            text: string,
                            props: {}) => {
    return (
        <div className={style.fieldWrapper}>
            <Field placeholder={placeholder} name={name}
                   component={component}
                   validate={validator}
                   className={style.field}
                   {...props}
            /><span className={style.textBeforeInput}>{text}</span>
        </div>
    )
}
