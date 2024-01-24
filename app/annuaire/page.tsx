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
        .order('created_at', { ascending: false })

    if (error) {
        return (
            <div>
                {error.message}
            </div>
        )
    }
    profiles = profiles.concat(profiles)
    //profiles = profiles.concat(profiles)
    profiles = profiles.concat(profiles)

    return (
        <Card className='container'>
            <div className='flex justify-center mb-4'>
                <CardHeader>
                    <CardTitle>Annuaire</CardTitle>
                    <CardDescription>Retrouvez ici tous les acteurs low-tech de la region !</CardDescription>
                </CardHeader>
            </div>
            <CardContent>
                <div className="flex justify-center flex-wrap mx-4 w-full">
                    {profiles?.length ? profiles.map((profile) => (
                        <Link key={profile.id} href={`/profil/${profile.id}`}>
                            <Card
                                className='flex flex-col items-center w-32 h-32 overflow-hidden m-2 p-2'
                            >
                                <ProfileAvatar profile={profile} />

                                <CardTitle className="mt-2">{profile.name}</CardTitle>
                                <CardDescription className="mt-2">{profile.short_desc}</CardDescription>
                            </Card>
                        </Link>
                    ))
                        :
                        <div>
                            Aucun utilisateur n'est inscrit
                        </div>
                    }
                </div>
            </CardContent>
        </Card>
    )
}
//
