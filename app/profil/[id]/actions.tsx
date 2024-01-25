"use server"

import { createClient } from '@/lib/utils/supabase/server';
import { getUser } from '@/lib/user';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function deleteProfile() {
    const supabase = createClient();
    const user = await getUser(supabase)
    if (!user) {
        throw new Error('no user')
    }

    const { error } = await supabase
        .from("user_profiles")
        .delete()
        .eq('user_id', user.id)

    if (error) {
        throw error
    }

    redirect(`/annuaire`)
}
export async function changeVisibility(visible: boolean) {
    const supabase = createClient();
    const user = await getUser(supabase)

    if (!user) {
        throw new Error('no user')
    }

    const { error } = await supabase
        .from("user_profiles")
        .update({
            visible
        })
        .eq('user_id', user.id)

    if (error) {
        throw error
    }

    revalidatePath(`/profil/${user.id}`)
    revalidatePath(`/annuaire`)
}