import { createClient } from "@/lib/utils/supabase/server";

import Link from "next/link";
import { Button } from "@/components/ui/button"
import { getUser } from "@/lib/user";

export default async function Header() {
  const supabase = createClient();
  const user = await getUser(supabase)

  return (
    <nav className="flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <Link href="/">

          <img
            src="/assets/images/lowtech-title.png"
            className="w-32"
            alt="lowtechbordeaux"
          />
        </Link>
        <nav>
          <Link href="/annonces">
            <span className="mx-2">Annonces</span>
          </Link>
          <Link href="/annuaire">
            <span className="mx-2">Annuaire</span>
          </Link>
        </nav>
        {
          user ? (
            <div className="flex items-center gap-4">
              <Link href="/profil">
                <Button className="py-2 px-4" variant="outline">
                  Profil
                </Button>
              </Link>
            </div>
          ) : (
            <Link
              href="/login"
              className="py-2 px-3"
            >
              <Button>
                Se connecter
              </Button>
            </Link>
          )
        }
      </div>
    </nav >
  );
}
