import Annonce from '@/components/Annonce';
import { createClient } from '@/lib/utils/supabase/server';

import { cookies } from 'next/headers';

export default async function Annonces({ params }: { params: { id: string } }) {
    const supabase = createClient();
    const { id } = params;

    const { data: annonce, error } = await supabase
        .from("annonces")
        .select(`
            *, 
            likes_count: annonce_likes(count),
            comments_count: annonce_comments(count),
            comments: annonce_comments(*)
         `)
        .eq('id', id)
        .single();

    return (
        <div>
            <div className="flex flex-col mx-4 w-full max-w-lg">
                <Annonce annonce={annonce} />
            </div>
        </div>
    )
}
