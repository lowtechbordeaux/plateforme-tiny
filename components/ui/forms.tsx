import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "./label"

type FormFieldProps = {
    name: string
    title?: string
    inputReq?: any;
    placeHolder?: string,
    className?: string,
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
    className,
    componentProps,
}:
    FormFieldProps &
    {
        Component: React.ComponentType<any>;
        componentProps?: any;
    }
) {

    const error = validationErrors?.[name]?._errors[0];
    return (
        <div className={className}>
            {title && <Label htmlFor={name} className='font-semibold'>{title}</Label>}
            {inputReq?.required && <span className="text-faded-foreground text-sm font-light italic"> (requis)</span>}
            <Component
                name={name}
                placeholder={placeHolder}
                defaultValue={defaultValues?.[name]}
                {...inputReq}
                {...componentProps}
            />
            {error && <span className='mt-2 mb-4 text-slate-500 text-end text-sm font-light'>{error}</span>}
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

export function TextAreaField({
    rows = 4,
    ...props
}:
    FormFieldProps & {
        rows?: number
    }
) {
    return (
        <FormField
            Component={Textarea}
            componentProps={{ rows }}
            {...props}
        />
    )
}