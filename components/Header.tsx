import AuthButton from "../components/AuthButton";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <Link href="/">

          <img
            src="./assets/images/lowtech-title.png"
            className="w-32"
            alt="lowtechbordeaux title"
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
        <AuthButton />
      </div>
    </nav >
  );
}
