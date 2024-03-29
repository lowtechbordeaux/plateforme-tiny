import Link from "next/link";
import { headers, cookies } from "next/headers";
import { createClient } from "@/lib/utils/supabase/server";
import { redirect } from "next/navigation";
import { CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Erreur d'authentification");
    }

    return redirect("/");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <div className='flex flex-col space-y-1.5 mx-4 my-4'>
        <CardTitle>Connexion</CardTitle>
      </div>
      {searchParams?.message && (
        <p className="mb-4 p-4 bg-foreground/10 text-foreground text-center">
          {searchParams.message}
        </p>
      )}
      <form
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action={signIn}
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-2"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-2"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <Button
          className="w-full"
        >
          Se connecter
        </Button>
        <p className="mt-2">
          Pas encore membre ?
        </p>
        <Link href="/signup">
          <Button
            variant="outline"
            className="w-full"
          >
            S'inscrire
          </Button>
        </Link>
      </form>
    </div>
  );
}
