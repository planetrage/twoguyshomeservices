import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";

/* CONTENT SOURCE */
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTIONS */
import StormwaterRepairsOverview from "../../components/service-page/stormwaterRepairsOverview";
import StormwaterRepairsSigns from "../../components/service-page/stormwaterRepairsSigns";
import StormwaterRepairsTypes from "../../components/service-page/stormwaterRepairsTypes";
import StormwaterRepairsWhyItMatters from "../../components/service-page/stormwaterRepairsWhyItMatters";
import StormwaterRepairsProcess from "../../components/service-page/stormwaterRepairsProcess";
import StormwaterRepairsWhyBlueTrust from "../../components/service-page/stormwaterRepairsWhyBlueTrust";

/* REUSED */
import WhiteGloveProgram from "../../components/service-page/whiteGloveProgram";
import StormwaterRepairsStartCTA from "../../components/service-page/stormwaterRepairsStartCTA";
import ContactInfo from "../../components/service-page/contactInfo";

export default function StormwaterSystemRepairsPage() {
  return (
    <>
      <Head>
        <title>
          Stormwater System Repairs | Blue Trust Water Management
        </title>
        <meta
          name="description"
          content="Stormwater system repair services to restore performance, resolve compliance issues, and protect property."
        />
      </Head>

      {/* GLOBAL HEADER */}
      <HeaderThree />

      <main>
        {/* HERO */}
        <ServiceHero {...serviceHeroes.stormwaterSystemRepairs} />

        <StormwaterRepairsOverview />

        <StormwaterRepairsSigns />

        <StormwaterRepairsTypes />

        <StormwaterRepairsWhyItMatters />

        <StormwaterRepairsProcess />

        <StormwaterRepairsWhyBlueTrust />

        <WhiteGloveProgram />

        <StormwaterRepairsStartCTA />

        <ContactInfo />
      </main>
    </>
  );
}
