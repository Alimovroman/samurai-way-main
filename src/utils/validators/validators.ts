export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value: string) => {

    return !value ? "Field is required" : undefined

}
export const maxLength = (max: number): FieldValidatorType => (value: string) => {
    return  value.length > max ? `Must be ${max} characters or less` : undefined
}
export const minLength = (min: number): FieldValidatorType => (value: string) => {
    return  value.length < min ? `Must be ${min} characters or more` : undefined
}