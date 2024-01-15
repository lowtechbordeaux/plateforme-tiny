import AuthButton from "../components/AuthButton";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <Link href="/">
          <span>🌴</span>
          {" "}
          < span > LowTechLabBdx</span>
        </Link>
        <nav>
          <Link href="/annonces">
            <span className="mx-2">Annonces</span>
          </Link>
        </nav>
        <AuthButton />
      </div>
    </nav >
  );
}
