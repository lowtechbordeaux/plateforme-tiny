import { createClient } from '@/lib/utils/supabase/server';
import { getUser, userCanManageAnnonces } from '@/lib/user';
import { Card, CardHeader, CardDescription, CardContent, CardTitle } from '@/components/ui/card';

import Link from "next/link"

import Annonce from '@/components/Annonce';
import { Button } from "@/components/ui/button"

export default async function Annonces() {
    const supabase = createClient();
    const user = await getUser(supabase)
    const canManageAnnonces = await userCanManageAnnonces(supabase, user)

    const { data: annonces, error } = await supabase
        .from("annonces")
        .select(`
            *, 
            likes_count: annonce_likes(count),
            comments_count: annonce_comments(count),
            user_profile: user_profiles!user_id(*)
         `)
        .order('created_at', { ascending: false })
        .limit(10)

    if (error) {
        console.error(error)
        return (
            <div>
                {error.message}
            </div>
        )
    }
    return (
        <div className='container flex flex-col items-center'>
            <div className='flex justify-between'>
                <CardHeader>
                    <CardTitle>Annonces</CardTitle>
                    <CardDescription>Retrouvez ici les annonces de nos membres afin de participer au projet !</CardDescription>
                </CardHeader>
                {canManageAnnonces &&
                    <div className='flex items-center p-6'>
                        <Link href="/annonce/new"><Button>Nouvelle annonce</Button></Link>
                    </div>
                }
            </div>
            <div className="flex flex-col w-[32rem] border divide-y">
                {annonces?.map((annonce) => (

                    <Link
                        key={annonce.id}
                        href={`/annonce/${annonce.id}`}
                        className="p-4 hover:bg-gray-50 transition-colors"
                    >
                        <Annonce annonce={annonce} />
                    </Link>
                ))}
            </div>
        </div>
    )
}
//
