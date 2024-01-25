"use server"

import { createClient } from '@/lib/utils/supabase/server';
import { getUser } from '@/lib/user';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function deleteAnnonce(annonceId: string) {
    const supabase = createClient();

    const user = await getUser(supabase)
    if (!user) {
        throw new Error('no user')
    }

    const { error } = await supabase
        .from("annonces")
        .delete()
        .eq('id', annonceId)

    if (error) {
        throw error
    }

    redirect(`/annonces`)
}