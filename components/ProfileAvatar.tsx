"use client"

import * as React from "react"

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tables } from '@/database.types';

const ProfileAvatar = React.forwardRef<
    React.ElementRef<typeof Avatar>,
    React.ComponentPropsWithoutRef<typeof Avatar> & { profile: Tables<'user_profiles'> }
>(({ profile, ...props }, ref) => (
    <Avatar {...props}>
        <AvatarImage src={profile.avatar_url} />
        <AvatarFallback>{profile.name.slice(0, 2)}</AvatarFallback>
    </Avatar>
))

export default ProfileAvatar