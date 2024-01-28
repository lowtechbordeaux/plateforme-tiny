import { createClient } from '@/lib/utils/supabase/server';
import { revalidatePath } from 'next/cache'

import moment from 'moment';
import { Tables } from '@/database.types';

import { CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from "@/components/ui/button"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProfileAvatar from './ProfileAvatar';

type CommentWithProfile = Tables<'annonce_comments'> & {
    profile: Tables<'user_profiles'>;
}
type AnnonceWithRelations = Tables<'annonces'> & {
    likes_count: { count: number }[];
    comments_count: { count: number }[];
    comments: CommentWithProfile[];
    user_profile: Tables<'user_profiles'>;
}
export default async function Annonce({
    annonce,
}: {
    annonce: AnnonceWithRelations;
}) {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser()

    const nbLikes = annonce.likes_count[0]?.count || 0
    const nbComments = annonce.comments_count[0]?.count || 0

    let commented = false
    let liked = false

    if (user) {
        const { data: ownAnnonce, error } = await supabase
            .from("annonces")
            .select(` 
                id,
                likes_count: annonce_likes(count),
                comments_count: annonce_comments(count),
                comments: annonce_comments(id)
            `)
            .eq('id', annonce.id)
            .eq('annonce_likes.user_id', user.id)
            .eq('annonce_comments.user_id', user.id)
            .single()

        commented = !!ownAnnonce?.comments_count[0]?.count
        liked = !!ownAnnonce?.likes_count[0]?.count
    }

    async function like(annonceId: string) {
        "use server"
        const supabase = createClient();

        const query = supabase
            .from('annonce_likes')

        if (liked) {
            await query.delete().eq(
                'annonce_id',
                annonceId
            )
        } else {
            await query.insert([
                { annonce_id: annonceId },
            ])
        }
        revalidatePath('/annonces')
        revalidatePath(`/annonce/${annonceId}`)
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                <ProfileAvatar profile={annonce.user_profile} className="w-12 h-12 rounded-full" />
                <div className='flex flex-col flex-1 ml-4 justify-center'>
                    <CardTitle className='mb-2'>{annonce.title}</CardTitle>
                    <CardDescription>
                        {annonce.user_profile.name}
                    </CardDescription>
                </div>
                {/*                 <div>
                    <FontAwesomeIcon icon={'ellipsis'} className="text-gray-500 hover:text-black" />
                </div> */}
            </div>
            <p className="mt-4">
                {annonce.content}
            </p>
            <div className="mt-4 grid gap-2">
                <div className="flex  items-center">
                    <div className='flex-1 space-x-2'>
                        <Button
                            size="sm"
                            variant="outline"
                            disabled={!user}
                            ssrClick={user && like.bind(null, annonce.id)}
                            className='group rounded-lg shadow-sm'
                        >
                            <FontAwesomeIcon
                                icon={[liked ? 'fas' : 'far', 'heart']}
                                className='group-hover:text-orange-500'
                            />
                            <span className='ml-2'>{nbLikes}</span>
                            <span className="sr-only">Like</span>
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            className='rounded-lg shadow-sm hover:bg-background cursor-default'
                        >
                            <FontAwesomeIcon
                                icon={[commented ? 'fas' : 'far', 'comment']}
                                className='group-hover:text-orange-500'
                            />
                            <span className='ml-2'>{nbComments}</span>
                            <span className="sr-only">Comments</span>
                        </Button>
                    </div>
                    <div className='text-sm text-muted-foreground'>
                        {moment(annonce.created_at).format("DD/MM/YYYY HH:mm")}
                    </div>
                </div>
            </div >
        </div >
    )
}
