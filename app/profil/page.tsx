import { createClient } from '@/lib/utils/supabase/server';
import { getUser } from '@/lib/user';

import { redirect } from 'next/navigation';

export default async function MyProfilePage() {
    const supabase = createClient();
    const user = await getUser(supabase)

    if (!user) {
        redirect('/annuaire')
    }

    const { data: profile, error } = await supabase
        .from("user_profiles")
        .select(`
            *
         `)
        .eq('user_id', user.id)
        .single();

    if (error) {
        throw error
    }

    if (!profile.name) {
        redirect('/profil/edit')
    } else {
        redirect(`/profil/${profile.user_id}`)
    }
}
