import Banner from "@/Componentes/Banner";
import Estatisticas from "@/Componentes/Estatisticas";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Link-bio Neymar Jr</title>
      </Head>
      <main className={`main`}>

        <Banner />
        <Estatisticas />

      </main>

    </>
  );
}
