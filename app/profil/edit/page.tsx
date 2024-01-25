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
        <div className="flex flex-col w-full max-w-sm">
            <h2 className='mb-2 text-lg font-semibold'>Modifier mon profil</h2>
            <p className='text-sm text-center text-muted-foreground mb-2'>
                Remplissez votre profil pour apparaitre dans l'annuaire, et rejoignez d'autres passionnés de low-techs !
            </p>
            <EditForm profile={profile} />
        </div>
    )
}
