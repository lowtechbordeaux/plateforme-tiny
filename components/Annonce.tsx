import { createClient } from '@/lib/utils/supabase/server';
import { revalidatePath } from 'next/cache'

import moment from 'moment';
import { Tables } from '@/database.types';
import Link from "next/link"

import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type AnnonceWithLikesAndComments = Tables<'annonces'> & {
    likes_count: { count: number }[];
    comments_count: { count: number }[];
    comments: Tables<'annonce_comments'>[];
}
export default async function Annonce({
    annonce,
}: {
    annonce: AnnonceWithLikesAndComments;
}) {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser()

    const nbLikes = annonce.likes_count[0]?.count || 0
    const nbComments = annonce.comments_count[0]?.count || 0
    const displayedComments = annonce.comments

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

    async function comment(annonceId: string) {
        "use server"
        const supabase = createClient();
        const { data, error } = await supabase
            .from('annonce_comments')
            .insert([
                {
                    annonce_id: annonceId,
                    content: "random"
                },
            ])
            .select()
            .single()
        revalidatePath('/annonces')
        revalidatePath(`/annonce/${annonceId}`)
    }

    return (
        <div>
            <Card className="rounded-none shadow-none border-0">
                <CardHeader className="p-4 flex flex-row items-center">
                    <Link href={`/annonce/${annonce.id}`} className="flex items-center gap-2 text-sm font-semibold">
                        <Avatar className="w-8 h-8 border">
                            <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                            <AvatarFallback>AC</AvatarFallback>
                        </Avatar>
                        {annonce.title}
                    </Link>
                    <span className="text-gray-500 dark:text-gray-400 ml-auto">
                        {moment(annonce.created_at).format("DD/MM/YYYY HH:mm")}
                    </span>
                </CardHeader>
                <CardContent className="p-4">
                    <p>
                        {annonce.content}
                    </p>
                </CardContent>
                <CardFooter className="p-2 pb-4 grid gap-2">
                    <div className="flex items-center w-full">
                        <Button size="icon" variant="ghost" disabled={!user} ssrClick={user && like.bind(null, annonce.id)}>
                            <FontAwesomeIcon icon={`fa-${liked ? 'solid' : 'regular'} fa-heart`} />
                            <span className='ml-2'>{nbLikes}</span>
                            <span className="sr-only">Like</span>
                        </Button>
                        <Button size="icon" variant="ghost" disabled={!user} ssrClick={user && comment.bind(null, annonce.id)}>
                            <FontAwesomeIcon icon={`fa-${commented ? 'solid' : 'regular'} fa-comment`} />
                            <span className='ml-2'>{nbComments}</span>
                            <span className="sr-only">Comments</span>
                        </Button>
                    </div>
                    <div>
                        {displayedComments.map((comment) => (
                            <div className='flex justify-between' key={comment.id}>
                                <span>{comment.content}</span>
                                <span>{moment(comment.created_at).format("DD/MM/YYYY HH:mm")}</span>
                            </div>
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}