import Annonce from '@/components/Annonce';
import { getUser } from '@/lib/user';
import { createClient } from '@/lib/utils/supabase/server';
import { Button } from '@/components/ui/button';
import { deleteAnnonce } from './actions';
import { revalidatePath } from 'next/cache'

import {
    DialogShort,
} from "@/components/ui/dialog"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import ProfileAvatar from '@/components/ProfileAvatar';
import moment from 'moment';
import { InputField } from '@/components/ui/forms';

export default async function Annonces({ params }: { params: { id: string } }) {
    const supabase = createClient();
    const { id } = params;

    const user = await getUser(supabase)

    const { data: annonce, error } = await supabase
        .from("annonces")
        .select(`
            *, 
            likes_count: annonce_likes(count),
            comments_count: annonce_comments(count),
            user_profile: user_profiles!user_id(*)
         `)
        .eq('id', id)
        .single()
        .throwOnError()

    const { data: comments } = await supabase
        .from("annonce_comments")
        .select(`
            *, 
            profile: user_profiles!user_id(*)
         `)
        .order('created_at', { ascending: false })
        .eq('annonce_id', id)
        .throwOnError()


    async function comment(annonceId: string, formData: FormData) {
        "use server"
        const supabase = createClient();
        const content = formData.get('content')
        if (!content) throw new Error('empty comment')

        const { error } = await supabase
            .from('annonce_comments')
            .insert([
                {
                    annonce_id: annonceId,
                    content: content,
                },
            ])
            .select()
        if (error) {
            throw error;
        }
        revalidatePath(`/annonce/${annonceId}`)
    }


    if (error) {
        throw error;
    }
    return (
        <div className='flex flex-col w-full max-w-2xl'>
            <div className='flex justify-between items-center mb-4'>
                <Link href="/annonces">
                    <Button variant="ghost"
                    >
                        <FontAwesomeIcon icon={['fas', 'arrow-left']} className="mr-2" />
                        Annonces
                    </Button>
                </Link>
                {annonce.user_profile.user_id === user?.id &&
                    <div className='pr-4'>
                        <DialogShort
                            title="Etes vous sûr?"
                            description="Votre annonce disparaitra à jamais."
                            triggerText="Supprimer l'annonce"
                            variant="destructive"
                            actionText="Supprimer"
                            action={deleteAnnonce.bind(null, annonce.id)}
                        />
                    </div>
                }
            </div>

            <div className="px-4">
                <Annonce annonce={annonce} />
                <div className='my-4'>
                    <form action={comment.bind(null, annonce.id)} className='flex items-center'>
                        <InputField
                            name="content"
                            placeHolder='Je peux venir vous aider !'
                            className='flex-1'
                            inputReq={{
                                minLength: 3,
                            }}
                        />
                        <Button className='ml-2'>Commenter</Button>
                    </form>
                </div>
                <h3 className='font-semibold mb-2'>Commentaires</h3>
                <div className='divide-y'>
                    {comments.map((comment) => (
                        <div
                            key={comment.id}
                            className='py-4'
                        >
                            <div className='flex'>
                                <div className='flex mr-4'>
                                    <ProfileAvatar profile={comment.profile} className="w-8 h-8 rounded-full" />
                                </div>
                                <div className='flex flex-col flex-1'>
                                    <div className='flex align-center justify-between'>
                                        <span className='font-semibold'>
                                            {comment.profile.name}
                                        </span>
                                        <span className='text-sm text-muted-foreground'>
                                            {moment(comment.created_at).format("DD/MM/YYYY HH:mm")}
                                        </span>
                                    </div>
                                    <div className='mt-2'>
                                        {comment.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}
