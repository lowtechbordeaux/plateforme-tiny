import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tables } from '@/database.types';

export default function ProfileAvatar({ profile }: { profile: Tables<'user_profiles'> }) {
    return (
        <Avatar>
            <AvatarImage src={profile.avatar_url} />
            <AvatarFallback>{profile.name.slice(0, 2)}</AvatarFallback>
        </Avatar>
    )
}