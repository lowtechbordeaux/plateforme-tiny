import { createClient } from '@/lib/utils/supabase/server';
import { redirect } from 'next/navigation';

import { getUser, userCanManageAnnonces } from '@/lib/user';
import CreateForm from './createForm';

export default async function CreateAnnonce() {
    const supabase = createClient()
    const user = await getUser(supabase)
    const canManageAnnonces = await userCanManageAnnonces(supabase, user)

    if (!canManageAnnonces) {
        redirect('/annonces')
    }

    return (
        <CreateForm />
    )
}
