'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

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
        <div className="flex flex-col my-8 w-full max-w-sm px-4">
            <h2 className='mb-2 text-lg font-semibold'>Nouvelle annonce</h2>
            <form action={formAction}>
                <div className='flex flex-col justify-center my-4'>
                    <label htmlFor="title" className='mb-2 font-light'>Titre</label>
                    <Input type="text" name="title" placeholder="Chantier tiny" className='mb-2' required minLength={5} />
                    <span className='mb-4 text-slate-500 text-end text-sm font-light'>{state.validationErrors['title']?._errors[0]}</span>
                    <label htmlFor="content" className='mb-2 font-light'>Contenu</label>
                    <Input type="text" name="content" placeholder="Recherche des menuisiers" className='mb-2' required minLength={5} />
                    <span className='mb-4 text-slate-500 text-end text-sm font-light'>{state.validationErrors['content']?._errors[0]}</span>
                    <Submit />
                </div>
            </form>
            {state.sumbitError && <span className='text-red-500 text-end text-sm font-light'>{state.sumbitError}</span>}
        </div>
    )
}
