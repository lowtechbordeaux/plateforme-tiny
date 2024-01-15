import { createClient } from '@/lib/utils/supabase/server';

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { getUser, userCanManageAnnonces } from '@/lib/user';

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

        const annonce = {
            title: formData.get('title'),
            content: formData.get('content'),
        }

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
        <div className="flex flex-col">
            <form action={handleSubmit}>
                <label htmlFor="title">Titre</label>
                <input type="text" name="title" />
                <label htmlFor="content">Contenu</label>
                <input type="text" name="content" />
                <button type="submit">Creer</button>
            </form>
        </div >
    )
}
