import { createClient } from '@/lib/utils/supabase/server';
import Profile from '@/components/Profile';
import { getUser } from '@/lib/user';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { notFound, redirect } from "next/navigation";

import { changeVisibility, deleteProfile } from './actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default async function ProfilePage({ params }: { params: { id: string } }) {
    const supabase = createClient();
    const { id } = params;
    const user = await getUser(supabase)

    const { data: profile, error } = await supabase
        .from("user_profiles")
        .select(`
            *
         `)
        .eq('user_id', id)
        .single();

    if (!profile) {
        notFound();
    }
    if (error) {
        throw error;
    }
    const isMyProfile = user && user.id === profile.user_id;

    const signOut = async () => {
        "use server";

        const supabase = createClient();
        await supabase.auth.signOut();
        return redirect("/");
    };

    return (
        <div className='flex flex-col items-center w-full max-w-sm'>
            <div className='flex justify-between items-center my-2'>
                <Link href="/annuaire">
                    <Button variant="ghost"
                    >
                        <FontAwesomeIcon icon={['fas', 'arrow-left']} className="mr-2" />
                        Annuaire
                    </Button>
                </Link>
            </div>
            {isMyProfile &&
                <div className='flex flex-col items-center'>
                    <div className='flex mb-4 space-x-2'>
                        <Link href={`/profil/edit`}>
                            <Button size="sm">Modifier mon profil</Button>
                        </Link>

                        <form action={signOut}>
                            <Button size="sm" variant="outline">Se déconnecter</Button>
                        </form>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                        <Switch
                            id="profile-visibility"
                            checked={profile.visible}
                            onCheckedChange={changeVisibility}
                        />
                        <Label htmlFor="profile-visibility">
                            {profile.visible ? 'Profil visible' : 'Profil masqué'}{' '}sur l'annuaire
                        </Label>
                    </div>
                </div>
            }

            {profile && <Profile profile={profile} />}
        </div>
    )
}
