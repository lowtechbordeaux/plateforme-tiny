"use server"

import { createClient } from '@/lib/utils/supabase/server';
import { z, ZodFormattedError } from "zod";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

const RawAnnonce = z.object({
    title: z.string().min(5),
    content: z.string().min(5),
});
type RawAnnonce = z.infer<typeof RawAnnonce>;

export async function createAnnonce(prevState: any, formData: FormData):
    Promise<{ submitError?: string, validationErrors?: ZodFormattedError<RawAnnonce> }> {
    const supabase = createClient()

    const rawFormData = Object.fromEntries(formData.entries())

    const r = RawAnnonce.safeParse(rawFormData)
    if (!r.success) {
        console.error(r.error)
        return {
            validationErrors: r.error.format(),
        }
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
        return {
            submitError: error.message
        }
    }

    revalidatePath('/annonces')
    redirect(`/annonce/${data.id}`)
}