'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { editProfile } from './actions'
import FormInput from '@/components/FormInput'
import { Tables } from '@/database.types'

type InitialState = {
    validationErrors?: {
        [key: string]: { _errors: string[] }
    }
    submitError?: string
}
const initialState: InitialState = {}

function Submit() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending}>Enregistrer</Button>
    );
}

export default function EditForm({
    profile,
}: {
    profile?: Tables<'user_profiles'>;
}) {
    const [st, formAction] = useFormState<string>(editProfile, initialState)
    const state = st as InitialState;

    return (
        <div className="flex flex-col w-full max-w-sm">
            <h2 className='mb-2 text-lg font-semibold'>Modifier mon profil</h2>
            <p className='text-sm text-center text-muted-foreground'>Remplissez votre profil pour apparaitre dans l'annuaire, et rejoignez d'autres passionnés de low-techs !</p>
            <form action={formAction}>
                <input type="hidden" name="id" value={profile?.id} />
                <div className='flex flex-col justify-center my-4'>
                    <FormInput
                        name='name'
                        title='Nom' placeHolder='Menuisier'
                        validationErrors={state.validationErrors}
                        defaultValues={profile}
                        inputReq={{
                            required: true,
                            minLength: 3,
                            maxLength: 20,
                        }}
                    />
                    <FormInput
                        name='short_desc'
                        title='Description rapide'
                        placeHolder='Menuisier'
                        validationErrors={state.validationErrors}
                        defaultValues={profile}
                        inputReq={{
                            required: true,
                            minLength: 3,
                            maxLength: 20,
                        }}
                    />
                    <FormInput
                        name='description'
                        title='Description complète'
                        placeHolder='Specialiste en portes sans poignées'
                        validationErrors={state.validationErrors}
                        defaultValues={profile}
                        inputReq={{
                            required: false,
                            maxLength: 400,
                        }}
                    />
                    <i className='mb-4 text-center text-sm'>En enregistrant ces informations, vous acceptez de les faire apparaitre publiquement dans l'annuaire.</i>
                    <Submit />
                    {!profile && <p className='mt-2 text-center text-muted-foreground'>Votre profil n'a pas encore été créé et n'est donc pas affiché dans l'annuaire.</p>}
                </div>
            </form>
            {state.submitError && <span className='text-red-500 text-end text-sm font-light'>{state.submitError}</span>}
        </div>
    )
}
