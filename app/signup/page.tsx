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
  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const secret = formData.get("secret") as string;
    if (secret !== process.env.SECRET_SIGNUP) {
      return redirect("/login?message=Mauvais code secret");
    }

    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
        data: {
          name: formData.get("name"),
        }
      },
    });

    if (error) {
      return redirect("/signup?message=Erreur lors de l'inscription");
    }

    return redirect("/login?message=Verifiez votre boite mail pour continuer");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <div className='flex flex-col space-y-1.5 mx-4 my-4'>
        <CardTitle>Inscription</CardTitle>
      </div>
      {searchParams?.message && (
        <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
          {searchParams.message}
        </p>
      )}
      <form
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action={signUp}
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-2"
          name="email"
          placeholder="you@example.com"
          minLength={6}
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
          minLength={6}
          required
        />
        <label className="text-md" htmlFor="name">
          Votre nom
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-2"
          type="text"
          name="name"
          placeholder="Jean Dupont"
          minLength={4}
          required
        />
        <label className="text-md" htmlFor="name">
          Code secret
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-2"
          type="password"
          name="secret"
          required
        />

        <Button
          className="w-full"
        >
          S'inscrire
        </Button>
        <p className="mt-2">
          Déjà membre ?
        </p>
        <Link href="/login">
          <Button
            variant="outline"
            className="w-full"
          >
            Se connecter
          </Button>
        </Link>
      </form>
    </div>
  );
}
