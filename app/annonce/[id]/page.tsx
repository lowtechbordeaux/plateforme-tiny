import Annonce from '@/components/Annonce';
import { getUser } from '@/lib/user';
import { createClient } from '@/lib/utils/supabase/server';
import { Button } from '@/components/ui/button';
import { deleteAnnonce } from './actions';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog"

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
            comments: annonce_comments(*),
            user_profile: user_profiles!user_id(*)
         `)
        .eq('id', id)
        .single();

    if (error) {
        throw error;
    }

    return (
        <div>
            <div className="flex flex-col mx-4 w-full max-w-lg">
                <Annonce annonce={annonce} />
            </div>
            {annonce.user_profile.user_id === user?.id &&
                <div className="flex justify-center mt-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="sm" variant="destructive">Supprimer l'annonce</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Etes vous sûr?</DialogTitle>
                                <DialogDescription>
                                    Votre annonce disparaitra à jamais .
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button size="sm" className="mx-1" variant="secondary">
                                        Annuler
                                    </Button>
                                </DialogClose>
                                <Button size="sm" className="mx-1" variant="destructive" ssrClick={deleteAnnonce.bind(null, annonce.id)}>
                                    Supprimer
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            }
        </div>
    )
}
