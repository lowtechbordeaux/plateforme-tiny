import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col gap-4 my-8">
            <h1 className="text-lg font-semibold">404</h1>
            <p>Page inconnue !</p>
            <Link href="/"><Button>Retour Maison</Button></Link>
        </div>
    )
}