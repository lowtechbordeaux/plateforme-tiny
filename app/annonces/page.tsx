import { createClient } from '@/lib/utils/supabase/server';
import { cookies } from 'next/headers';

import Link from "next/link"

import { Button } from "@/components/ui/button"
import Annonce from '@/components/Annonce';
import { getUser, userCanManageAnnonces } from '@/lib/user';

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
        <div>
            {canManageAnnonces &&
                <div className='flex justify-center my-4'>
                    <Link href="/annonces/create"><Button>Nouvelle annonce</Button></Link>
                </div>
            }

            <div className="flex flex-col mx-4 w-full max-w-lg">
                {annonces?.map((annonce) => (
                    <Annonce key={annonce.id} annonce={annonce} preview />
                ))}
            </div>
        </div>
    )
}
//
