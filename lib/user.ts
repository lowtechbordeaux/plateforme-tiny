import { SupabaseClient, User } from "@supabase/supabase-js"
import { Enums } from '@/database.types';

export async function getUser(supabase: SupabaseClient): Promise<User | null> {
    const { data: { user } } = await supabase.auth.getUser()
    return user
}

export async function getUserRole(supabase: SupabaseClient, user: User | null): Promise<Enums<'roles'> | null> {
    if (!user) return null
    const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user?.id)
        .single()

    return data?.role
}

export function roleCanManageAnnonces(role: Enums<'roles'> | null) {
    return role === 'admin' || role === 'mod'
}

export async function userCanManageAnnonces(supabase: SupabaseClient, user: User | null) {
    if (!user) return false
    const userRole = await getUserRole(supabase, user)
    return roleCanManageAnnonces(userRole)
}