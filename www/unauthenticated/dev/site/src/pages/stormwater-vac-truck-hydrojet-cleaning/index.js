import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";

/* CONTENT */
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTIONS */
import StormwaterVacOverview from "../../components/service-page/stormwaterVacOverview";
import StormwaterVacWhyCleaningMatters from "../../components/service-page/stormwaterVacWhyCleaningMatters";
import StormwaterVacServiceIncludes from "../../components/service-page/stormwaterVacServiceIncludes";
import StormwaterVacProblemsSolved from "../../components/service-page/stormwaterVacProblemsSolved";
import StormwaterVacCleaningFrequency from "../../components/service-page/stormwaterVacCleaningFrequency";
import StormwaterVacWhyBlueTrust from "../../components/service-page/stormwaterVacWhyBlueTrust";

/* REUSED */
import WhiteGloveProgram from "../../components/service-page/whiteGloveProgram";
import StormwaterVacStartCTA from "../../components/service-page/stormwaterVacStartCTA";
import ContactInfo from "../../components/service-page/contactInfo";

export default function StormwaterVacTruckHydrojetCleaningPage() {
  return (
    <>
      <Head>
        <title>
          Stormwater Drain Vac Truck &amp; Hydrojet Cleaning | Blue Trust
        </title>
        <meta
          name="description"
          content="Stormwater drain vac truck and hydrojet cleaning services to restore flow, prevent flooding, and maintain system compliance."
        />
      </Head>

      <HeaderThree />

      <main>
        {/* HERO */}
        <ServiceHero {...serviceHeroes.stormwaterVacTruckHydrojetCleaning} />

        <StormwaterVacOverview />

        <StormwaterVacWhyCleaningMatters />

        <StormwaterVacServiceIncludes />

        <StormwaterVacProblemsSolved />

        <StormwaterVacCleaningFrequency />

        <StormwaterVacWhyBlueTrust />

        <WhiteGloveProgram />

        <StormwaterVacStartCTA />

        <ContactInfo />
      </main>
    </>
  );
}
