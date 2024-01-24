import { createClient } from '@/lib/utils/supabase/server';
import Profile from '@/components/Profile';
import { getUser } from '@/lib/user';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
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

import { deleteProfile } from './actions';

export default async function ProfilePage({ params }: { params: { id: string } }) {
    const supabase = createClient();
    const { id } = params;
    const user = await getUser(supabase)

    const { data: profile, error } = await supabase
        .from("user_profiles")
        .select(`
            *
         `)
        .eq('id', id)
        .single();

    return (
        <div className='flex flex-col items-center'>
            <Profile profile={profile} />
            {user &&
                <div className='mt-4 flex flex-col items-center'>
                    <div className='mb-4'>
                        <p>
                            Votre profil est visible publiquement et apparait dans l'annuaire.
                        </p>
                        <p>
                            Si vous ne souhaitez plus apparaitre dans l'annuaire, vous pouvez supprimer votre profil ci-dessous:
                        </p>
                    </div>
                    <Link href={`/profil/edit`} className='mb-2'>
                        <Button size="sm">Modifier mon profil</Button>
                    </Link>
                    <Dialog>
                        <DialogTrigger>
                            <Button size="sm" variant="destructive">Supprimer mon profil</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Etes vous sûr?</DialogTitle>
                                <DialogDescription>
                                    Votre compte ne sera pas supprimé, mais votre profil disparaitra de l'annuaire.

                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button size="sm" className="mx-1" variant="secondary">
                                        Annuler
                                    </Button>
                                </DialogClose>
                                <Button size="sm" className="mx-1" variant="destructive" ssrClick={deleteProfile}>
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
