import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type FormFieldProps = {
    name: string
    title: string
    inputReq?: any;
    placeHolder?: string,
    defaultValues?: { [key: string]: any }
    validationErrors?: { [key: string]: { _errors: string[] } }
}

function FormField({
    name,
    title,
    placeHolder,
    validationErrors,
    inputReq,
    defaultValues,
    Component,
    componentProps,
}:
    FormFieldProps &
    {
        Component: React.ComponentType<any>;
        componentProps?: any;
    }
) {

    return (
        <div className="mb-2">
            <label htmlFor={name} className='mb-2 font-semibold tracking-tight'>{title}</label>
            {inputReq?.required && <span className="text-faded-foreground text-sm font-light italic"> (requis)</span>}
            <Component
                name={name}
                placeholder={placeHolder}
                className='mb-2'
                defaultValue={defaultValues?.[name]}
                {...inputReq}
                {...componentProps}
            />
            <span className='mb-4 text-slate-500 text-end text-sm font-light'>{validationErrors?.[name]?._errors[0]}</span>
        </div>
    )
}

export function InputField({ type = 'text', ...props }:
    FormFieldProps & {
        type?: string
    }
) {
    return (
        <FormField Component={Input} componentProps={{ type: type }} {...props} />
    )
}

export function TextAreaField({ ...props }: FormFieldProps) {
    return (
        <FormField
            Component={Textarea}
            componentProps={{ rows: 4 }}
            {...props}
        />
    )
}