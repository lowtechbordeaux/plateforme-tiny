'use client'

import { useEffect } from 'react'

import { Button } from '@/components/ui/button'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className='flex flex-col center gap-4 my-8'>
            <h2>Probleme de formulaire</h2>
            <Button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Retour
            </Button>
        </div>
    )
}