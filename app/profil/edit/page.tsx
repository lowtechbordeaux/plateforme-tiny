import { createClient } from '@/lib/utils/supabase/server';

import { getUser } from '@/lib/user';
import EditForm from './EditForm';
import { redirect } from 'next/navigation';

export default async function EditProfile() {
    const supabase = createClient()
    const user = await getUser(supabase)

    if (!user) {
        redirect('/annuaire')
    }


    const { data: profile, error } = await supabase
        .from("user_profiles")
        .select(`*`)
        .eq('user_id', user.id)
        .single();

    return (
        <EditForm profile={profile} />
    )
}
