import { Tables } from '@/database.types';
import { Card, CardHeader, CardDescription, CardContent, CardTitle } from '@/components/ui/card';
import ProfileAvatar from './ProfileAvatar';

export default async function Profile(
    { profile }: { profile: Tables<'user_profiles'> }
) {
    return (
        <Card className='p-2'>
            <CardHeader className="flex flex-row justify-between w-full pb-2 space-y-0">
                <div className='flex flex-col space-y-1.5'>
                    <CardTitle>{profile.name || '?'}</CardTitle>
                    <CardDescription className='italic'>{profile.organisation}</CardDescription>
                    <CardDescription>{profile.short_desc}</CardDescription>
                </div>
                <ProfileAvatar profile={profile} className="h-24 w-24" />
            </CardHeader>
            <CardContent>
                <h2 className='font-bold text-muted-foreground text-sm'>Biographie</h2>
                <div>
                    {profile.description?.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                    ))}
                </div>

                <h2 className='mt-4 font-bold'>Contact</h2>

                {profile.email &&
                    <>
                        <h3 className='mt-2 font-bold text-muted-foreground text-sm'>Mail</h3>
                        <span>{profile.email}</span>
                    </>
                }
                {profile.telephone &&
                    <>
                        <h3 className='mt-2 font-bold text-muted-foreground text-sm'>Telephone</h3>
                        <span>{profile.telephone}</span>
                    </>
                }
            </CardContent>

        </Card>
    )
}
