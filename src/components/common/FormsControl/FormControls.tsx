import React, {DetailedHTMLProps, FC, HTMLAttributes, ReactNode, TextareaHTMLAttributes} from "react";
import style from './FormControls.module.css'

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
    // input: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
    input: DetailedHTMLProps<any, HTMLTextAreaElement>

    // input: {
    //     name?: string
    //     onBlur?: () => void
    //     onChange?: () => void
    //     onDragStart: () => void
    //     onDrop: () => void
    //     onFocus: () => void
    //     value: string
    // }
    type: string
    children: ReactNode
    meta: any
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