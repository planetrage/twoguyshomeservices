import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTIONS */
import PondCleanoutOverview from "../../components/service-page/pondCleanoutOverview";
import PondWhyCleanoutsNeeded from "../../components/service-page/pondWhyCleanoutsNeeded";
import PondCleanoutIncludes from "../../components/service-page/pondCleanoutIncludes";
import PondProblemsAndSigns from "../../components/service-page/pondProblemsAndSigns";
import PondCleanoutVsPropertyClearing from "../../components/service-page/pondCleanoutVsPropertyClearing";
import PondWhyBlueTrust from "../../components/service-page/pondWhyBlueTrust";

/* REUSED */
import WhiteGloveProgram from "../../components/service-page/whiteGloveProgram";
import PondCleanoutStartCTA from "../../components/service-page/pondCleanoutStartCTA";
import ContactInfo from "../../components/service-page/contactInfo";

export default function StormwaterPondCleanoutsPage() {
  return (
    <>
      <Head>
        <title>
          Stormwater Pond Cleanouts | Blue Trust Water Management
        </title>
        <meta
          name="description"
          content="Stormwater pond cleanouts to restore capacity, maintain compliance, and protect downstream systems."
        />
      </Head>

      <HeaderThree />

      <main>
        {/* HERO */}
        <ServiceHero {...serviceHeroes.stormwaterPondCleanouts} />

        <PondCleanoutOverview />

        <PondWhyCleanoutsNeeded />

        <PondCleanoutIncludes />

        <PondProblemsAndSigns />

        <PondCleanoutVsPropertyClearing />

        <PondWhyBlueTrust />

        <WhiteGloveProgram />

        <PondCleanoutStartCTA />

        <ContactInfo />
      </main>
    </>
  );
}
