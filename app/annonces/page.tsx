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
            comments: annonce_comments(*)
         `)
        .order('created_at', { ascending: false })
        .order('created_at', { referencedTable: 'comments', ascending: false })
        .limit(2, { referencedTable: 'comments' })

    if (error) {
        return (
            <div>
                {error.message}
            </div>
        )
    }
    return (
        <Card className='container'>
            <div className='w-full flex justify-between'>
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
            <CardContent>
                <div className="flex flex-col">
                    {annonces?.map((annonce) => (
                        <div key={annonce.id} className='mb-4'>
                            <Annonce annonce={annonce} />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
//
