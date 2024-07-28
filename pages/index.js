import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Bem-vindo a Home!</h1>

      <ul>
        <li>
          <Link href="/products"> Produtos </Link>
        </li>
        <li>
          <Link href="/about"> Sobre </Link>
        </li>
      </ul>
    </>
  );
}
