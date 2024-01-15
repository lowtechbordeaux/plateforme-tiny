import { createClient } from '@/lib/utils/supabase/server';

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { getUser, userCanManageAnnonces } from '@/lib/user';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { z } from "zod";

const RawAnnonce = z.object({
    title: z.string().min(5),
    content: z.string().min(5),
});
type RawAnnonce = z.infer<typeof RawAnnonce>;

export default async function CreateAnnonce() {
    const supabase = createClient()
    const user = await getUser(supabase)
    const canManageAnnonces = await userCanManageAnnonces(supabase, user)

    if (!canManageAnnonces) {
        redirect('/annonces')
    }

    async function handleSubmit(formData: FormData) {
        "use server"
        const supabase = createClient()

        const rawFormData = {
            title: formData.get('title'),
            content: formData.get('content'),
        }

        const r = RawAnnonce.safeParse(rawFormData)
        if (!r.success) {
            throw new Error('Invalid form data')
        }

        const annonce: RawAnnonce = r.data

        const { data, error } = await supabase
            .from('annonces')
            .insert([
                annonce,
            ])
            .select()
            .single()

        if (error) {
            console.error(error)
            throw error
        }

        revalidatePath('/annonces')
        redirect(`/annonce/${data.id}`)
    }

    return (
        <div className="flex flex-col my-8">
            <h2 className='mb-2 text-lg font-semibold'>Nouvelle annonce</h2>
            <form action={handleSubmit}>
                <div className='flex flex-col justify-center my-4'>
                    <label htmlFor="title" className='mb-2 font-light'>Titre</label>
                    <Input type="text" name="title" placeholder="Chantier tiny" className='mb-4' />
                    <label htmlFor="content" className='mb-2 font-light'>Contenu</label>
                    <Input type="text" name="content" placeholder="Recherche des menuisiers" className='mb-4' />
                    <Button type="submit">Creer</Button>
                </div>
            </form>
        </div >
    )
}
