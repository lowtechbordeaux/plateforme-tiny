'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { Button } from "@/components/ui/button"

import { editProfile } from './actions'
import { InputField, TextAreaField } from '@/components/ui/forms'
import { Tables } from '@/database.types'
import ProfileAvatar from '@/components/ProfileAvatar'

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
                <input type="hidden" name="avatar_url" value={profile?.avatar_url ?? ''} />

                <h3 className='font-bold text-xl'>
                    Bio
                </h3>

                <div className='flex flex-col justify-center my-4'>
                    <InputField
                        name='name'
                        title='Nom'
                        placeHolder='Menuisier'
                        validationErrors={state.validationErrors}
                        defaultValues={profile}
                        inputReq={{
                            required: true,
                            minLength: 3,
                            maxLength: 20,
                        }}
                    />
                    <InputField
                        name='short_desc'
                        title='Description rapide'
                        placeHolder='Menuisier'
                        validationErrors={state.validationErrors}
                        defaultValues={profile}
                        inputReq={{
                            required: false,
                            maxLength: 20,
                        }}
                    />
                    <TextAreaField
                        name='description'
                        title='Description avancée'
                        placeHolder='Specialiste en portes sans poignées'
                        validationErrors={state.validationErrors}
                        defaultValues={profile}
                        inputReq={{
                            required: false,
                            maxLength: 400,
                        }}
                    />

                    <InputField
                        name='organisation'
                        title="Faites vous partie d'un groupe de travail ?"
                        placeHolder='Asso LesEcolos'
                        validationErrors={state.validationErrors}
                        defaultValues={profile}
                        inputReq={{
                            required: false,
                            maxLength: 15,
                        }}
                    />

                    <div className='flex'>

                        <InputField
                            name='avatar_file'
                            type="file"
                            title='Image de profil'
                            validationErrors={state.validationErrors}
                            inputReq={{
                                required: false,
                            }}
                        />
                        {profile &&
                            <div className='flex justify-center ml-4'>
                                {profile.avatar_url ?
                                    <div>
                                        <ProfileAvatar profile={profile} className='w-16 h-16' />
                                    </div>
                                    :
                                    <span>Pas encore d'image de profil</span>
                                }
                            </div>
                        }
                    </div>

                    <h3 className='font-bold text-xl'>
                        Contact
                    </h3>
                    <i className='font-light text-sm mb-2'>
                        Indiquez les coordonnées où vous souhaitez que les autre membres puissent vous contacter
                    </i>

                    <InputField
                        name='telephone'
                        type="tel"
                        title='Numéro de telephone'
                        placeHolder='+336123456789'
                        validationErrors={state.validationErrors}
                        defaultValues={profile}
                        inputReq={{
                            required: false,
                            maxLength: 15,
                        }}
                    />
                    <InputField
                        name='email'
                        title='Email'
                        type="email"
                        placeHolder='jean@openmail.com'
                        validationErrors={state.validationErrors}
                        defaultValues={profile}
                        inputReq={{
                            required: false,
                            maxLength: 50,
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
