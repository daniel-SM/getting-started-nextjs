import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Products() {
  return (
    <>
      <NavBar />
      <h1>Página de Produtos</h1>

      <div>
        <Link href="/"> Voltar </Link>
      </div>
    </>
  );
}
