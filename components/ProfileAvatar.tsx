"use client"

import * as React from "react"

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tables } from '@/database.types';
import { createClient } from "@/lib/utils/supabase/client";

const ProfileAvatar = React.forwardRef<
    React.ElementRef<typeof Avatar>,
    React.ComponentPropsWithoutRef<typeof Avatar> & { profile: Tables<'user_profiles'> }
>(({ profile, ...props }, ref) => {
    const [url, setUrl] = React.useState<string | undefined>()

    const supabase = createClient()

    React.useEffect(() => {
        async function getPublicUrl(path: string) {
            try {
                const { data: { publicUrl } } = supabase
                    .storage
                    .from('avatar')
                    .getPublicUrl(path)

                setUrl(publicUrl)
            } catch (error) {
                console.log('Error downloading image: ', error)
            }
        }

        if (profile.avatar_url) getPublicUrl(profile.avatar_url)
    }, [profile, supabase])

    return (
        <Avatar {...props}>
            <AvatarImage src={url} className="object-cover" />
            <AvatarFallback>{profile.name.slice(0, 2)}</AvatarFallback>
        </Avatar>
    )
})

export default ProfileAvatar