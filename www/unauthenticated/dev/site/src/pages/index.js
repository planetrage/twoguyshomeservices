import Head from "next/head";
import HeaderThree from "../components/header/header-3";
import Hero from "../components/home-page/hero";
import Services from "../components/home-page/services";
import ServicesTwo from "../components/home-page/services-two";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Blue Trust Water Management</title>
        <meta
          name="description"
          content="Florida’s Premier Environmental Haus"
        />
      </Head>

      {/* DEBUG CONFIRMATION */}
      <div
        style={{
          background: "#13144D",
          color: "white",
          padding: "12px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        ✅ INDEX WORKS — HOMEPAGE IS LIVE
      </div>

      {/* HEADER */}
      <HeaderThree />

      {/* HERO */}
      <Hero />

      {/* SERVICES OVERVIEW */}
      <Services />

      {/* CHOOSE YOUR SERVICE */}
      <ServicesTwo />
    </>
  );
}
