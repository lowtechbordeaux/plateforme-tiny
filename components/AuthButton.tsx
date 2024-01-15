import { createClient } from "@/lib/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/user";

import { Button } from "@/components/ui/button"

export default async function AuthButton() {
  const supabase = createClient();
  const user = await getUser(supabase)

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4">
      <Link href="/profile">
        <span className="mx-2">Profile</span>
      </Link>
      <form action={signOut}>
        <Button className="py-2 px-4">
          Logout
        </Button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3"
    >
      <Button>
        Login
      </Button>
    </Link>
  );
}
