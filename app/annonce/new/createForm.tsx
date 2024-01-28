'use client'

// @ts-expect-error
import { useFormState, useFormStatus } from 'react-dom'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { InputField, TextAreaField } from '@/components/ui/forms'

import { createAnnonce } from './actions'

const initialState = {
    validationErrors: [],
}

function Submit() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending}>Creer</Button>
    );
}


export default function CreateForm() {
    const [state, formAction] = useFormState(createAnnonce, initialState)

    return (
        <div className="flex flex-col w-full max-w-lg">
            <h2 className='mb-2 text-lg font-semibold'>Nouvelle annonce</h2>
            <form action={formAction}>
                <div className='flex flex-col justify-center my-4 space-y-4'>
                    <InputField
                        name='title'
                        title='Titre'
                        placeHolder='Chantier tiny'
                        validationErrors={state.validationErrors}
                        inputReq={{
                            required: true,
                            minLength: 3,
                            maxLength: 20,
                        }}
                    />
                    <TextAreaField
                        name='content'
                        title='Contenu'
                        placeHolder='Recherche des menuisiers'
                        validationErrors={state.validationErrors}
                        inputReq={{
                            required: true,
                            minLength: 3,
                            maxLength: 20,
                        }}
                        rows={6}
                    />
                    <Submit />
                </div>
            </form>
            {state.sumbitError && <span className='text-red-500 text-end text-sm font-light'>{state.sumbitError}</span>}
        </div>
    )
}
