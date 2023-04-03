import React, {DetailedHTMLProps, FC, HTMLAttributes, ReactNode, TextareaHTMLAttributes} from "react";
import style from './FormControls.module.css'

const FormControl: FC<Props> = ({
                                    input,
                                    type,
                                    child,
                                    element,
                                    meta: {touched, error, warning}
                                }) => {
    return (
        <div className={`${style.formControl} ${touched && error ? style.error : ""}`}>
            <div>
                {element === 'input' && <input {...input} type={type}/>}
                {element === 'textArea' && <textarea {...input} type={type}/>}
            </div>
            {touched && error && <span>{error}</span>}
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
    child: ReactNode
    meta: any
    element: "input" | "textArea"
}

export const TextArea: FC<Props> = (props) => {
    return (
        <FormControl {...props} element={'textArea'}/>

    )
}

export const Input: FC<Props> = (props) => {
    return (
        <FormControl {...props} element={'input'}/>
    )
}