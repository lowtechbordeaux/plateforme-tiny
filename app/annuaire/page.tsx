import { createClient } from '@/lib/utils/supabase/server';
import { Card, CardHeader, CardDescription, CardContent, CardTitle } from '@/components/ui/card';

import Link from "next/link"
import ProfileAvatar from '@/components/ProfileAvatar';

export default async function Annuaire() {
    const supabase = createClient();

    let { data: profiles, error } = await supabase
        .from("user_profiles")
        .select(`
            *
         `)
        .eq('visible', true)
        .order('created_at', { ascending: false })

    if (error) {
        return (
            <div>
                {error.message}
            </div>
        )
    }

    return (
        <div className='flex flex-col w-full max-w-2xl'>
            <div className='flex flex-col space-y-1.5 mx-4 my-4'>
                <CardTitle>Annuaire</CardTitle>
                <CardDescription>Retrouvez ici tous les acteurs low-tech de la region !</CardDescription>
            </div>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-center place-content-center">
                    {profiles?.length ? profiles.map((profile) => (
                        <Link key={profile.user_id} href={`/profil/${profile.user_id}`}>
                            <Card
                                className='flex flex-col justify-center items-center w-42 h-64 overflow-hidden p-2'
                            >
                                <ProfileAvatar profile={profile} className='mb-2 h-32 w-32' />
                                <CardTitle className="mt-2">{profile.name}</CardTitle>
                                <CardDescription className="mt-2">{profile.short_desc}</CardDescription>
                                <CardDescription className="mt-2">{profile.organisation}</CardDescription>
                            </Card>
                        </Link >
                    ))
                        :
                        <div>
                            Aucun utilisateur n'est inscrit
                        </div>
                    }
                </div >
            </CardContent >
        </div>
    )
}
//
