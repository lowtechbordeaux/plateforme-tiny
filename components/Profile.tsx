import { Tables } from '@/database.types';
import { Card, CardDescription, CardContent, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import ProfileAvatar from './ProfileAvatar';

export default async function Profile(
    { profile }: { profile: Tables<'user_profiles'> }
) {
    return (
        <Card className='w-64'>
            <div className="flex flex-row w-full p-6">
                <ProfileAvatar profile={profile} />
                <div className='flex flex-col space-y-1.5 ml-4'>
                    <CardTitle>{profile.name}</CardTitle>
                    <CardDescription>{profile.short_desc}</CardDescription>
                </div>
            </div>
            <CardContent>
                <span>{profile.description}</span>
            </CardContent>

        </Card>
    )
}
