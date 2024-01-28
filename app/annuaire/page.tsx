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
        <div className='container flex flex-col items-center'>
            <CardHeader>
                <CardTitle>Annuaire</CardTitle>
                <CardDescription>Retrouvez ici tous les acteurs low-tech de la region !</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex justify-center flex-wrap mx-4 w-full">
                    {profiles?.length ? profiles.map((profile) => (
                        <Link key={profile.user_id} href={`/profil/${profile.user_id}`}>
                            <Card
                                className='flex flex-col justify-center items-center w-48 h-64 overflow-hidden m-2 p-2'
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
