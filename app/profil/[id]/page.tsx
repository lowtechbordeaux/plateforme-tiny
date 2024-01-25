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
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { redirect } from "next/navigation";

import { changeVisibility, deleteProfile } from './actions';

export default async function ProfilePage({ params }: { params: { id: string } }) {
    const supabase = createClient();
    const { id } = params;
    const user = await getUser(supabase)

    const { data: profile, error } = await supabase
        .from("user_profiles")
        .select(`
            *
         `)
        .eq('user_id', id)
        .single();

    if (error) {
        throw error;
    }
    if (!profile) {
        redirect('/annuaire')
    }
    const isMyProfile = user && user.id === profile.user_id;

    const signOut = async () => {
        "use server";

        const supabase = createClient();
        await supabase.auth.signOut();
        return redirect("/");
    };

    return (
        <div className='flex flex-col items-center'>

            {isMyProfile &&
                <div className='mt-4 flex flex-col items-center'>
                    <div className='flex mb-4 space-x-2'>
                        <Link href={`/profil/edit`}>
                            <Button size="sm">Modifier mon profil</Button>
                        </Link>

                        <Dialog>
                            <DialogTrigger asChild>
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


                        <form action={signOut}>
                            <Button size="sm" variant="outline">Se déconnecter</Button>
                        </form>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                        <Switch
                            id="profile-visibility"
                            checked={profile.visible}
                            onCheckedChange={changeVisibility}
                        />
                        <Label htmlFor="profile-visibility">
                            {profile.visible ? 'Profil visible' : 'Profil masqué'}
                        </Label>
                    </div>
                </div>
            }

            {profile && <Profile profile={profile} />}
        </div>
    )
}
