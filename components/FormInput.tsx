import { Input } from "@/components/ui/input"

export default function FormInput({
    name,
    title,
    placeHolder,
    validationErrors,
    inputReq,
    defaultValues,
}: {
    name: string
    title: string
    inputReq: any;
    placeHolder?: string,
    defaultValues?: { [key: string]: any }
    validationErrors?: { [key: string]: { _errors: string[] } }
}) {
    return (
        <div className="mb-2">
            <label htmlFor={name} className='mb-2 font-light'>{title}</label>
            <Input
                type="text"
                name={name}
                placeholder={placeHolder}
                className='mb-2'
                defaultValue={defaultValues?.[name]}
                {...inputReq}
            />
            <span className='mb-4 text-slate-500 text-end text-sm font-light'>{validationErrors?.[name]?._errors[0]}</span>
        </div>
    )
}