import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function About () {
  return (
    <>
      <NavBar />
      <h1>Página de Sobre</h1>

      <div>
        <Link href="/"> Voltar </Link>
      </div>
    </>
  );
}
