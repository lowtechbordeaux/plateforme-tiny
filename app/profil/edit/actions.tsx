"use server"

import { createClient } from '@/lib/utils/supabase/server';
import { z, ZodFormattedError } from "zod";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { getUser } from '@/lib/user';

const RawProfile = z.object({
    id: z.string(),
    name: z.string().min(3),
    short_desc: z.string(),
    description: z.string(),
    organisation: z.string(),
    email: z.string(),
    telephone: z.string(),
    avatar_file: z.instanceof(File).optional(),
    avatar_url: z.string().optional(),
});
type RawProfile = z.infer<typeof RawProfile>;

export async function editProfile(prevState: any, formData: FormData):
    Promise<{ submitError?: string, validationErrors?: ZodFormattedError<RawProfile> }> {

    const rawFormData = Object.fromEntries(formData.entries())

    const r = RawProfile.safeParse(rawFormData)
    if (!r.success) {
        console.error(r.error)
        return {
            validationErrors: r.error.format(),
        }
    }

    const profile: RawProfile = r.data

    const supabase = createClient()

    if (profile.avatar_file) {
        const filePath = Date.now() + '-' + profile.avatar_file.name
        const avatarData = await profile.avatar_file.arrayBuffer()
        const { error } = await supabase.storage.from('avatar').upload(filePath, avatarData);
        if (error) {
            console.error(error)
            return {
                submitError: error.message
            }
        }
        profile.avatar_url = filePath
        delete profile.avatar_file
    }

    const user = await getUser(supabase)
    if (!user) {
        return {
            submitError: 'no user'
        }
    }

    const { data, error } = await supabase
        .from('user_profiles')
        .upsert({
            ...profile,
            id: profile.id || undefined,
        })
        .select()
        .single()


    if (error) {
        console.error(error)
        return {
            submitError: error.message
        }
    }

    revalidatePath('/annuaire')
    revalidatePath(`/profil/${data.id}`)
    redirect(`/profil/${data.id}`)
}