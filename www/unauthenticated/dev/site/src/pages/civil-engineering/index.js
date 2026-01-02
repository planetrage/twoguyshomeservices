import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/ServiceHero";
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTIONS */
import CivilUtilityOverview from "../../components/service-page/civil-utility-overview";
import WhyChooseBlueTrust from "../../components/service-page/whyChooseBlueTrust";
import CivilServicesIncluded from "../../components/service-page/civilServicesIncluded";
import LandDevelopment from "../../components/service-page/landDevelopment";
import BlueTrustReport from "../../components/service-page/blueTrustReport";
import ProjectStartCTA from "../../components/service-page/projectStartCTA";
import ContactInfo from "../../components/service-page/contactInfo";

export default function CivilEngineeringPage() {
  const hero = serviceHeroes.civilEngineeringDesign;

  return (
    <>
      <Head>
        <title>Civil Engineering Design | Blue Trust Water Management</title>
        <meta
          name="description"
          content="Civil and utility engineering services supporting land development, infrastructure design, and regulatory approval."
        />
      </Head>

      {/* GLOBAL HEADER */}
      <HeaderThree />

      <main>
        {/* HERO — NOW CONTENT-DRIVEN */}
        <ServiceHero {...hero} />

        {/* SECTION 2 */}
        <CivilUtilityOverview />

        {/* SECTION 3 */}
        <WhyChooseBlueTrust />

        {/* SECTION 4 */}
        <CivilServicesIncluded />

        {/* SECTION 5 */}
        <LandDevelopment />

        {/* SECTION 6 */}
        <BlueTrustReport />

        {/* SECTION 7 */}
        <ProjectStartCTA />

        {/* SECTION 8 */}
        <ContactInfo />
      </main>
    </>
  );
}
