import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTIONS */
import PropertyClearingOverview from "../../components/service-page/propertyClearingOverview";
import PropertyClearingWhyNeeded from "../../components/service-page/propertyClearingWhyNeeded";
import PropertyClearingIncludes from "../../components/service-page/propertyClearingIncludes";
import PropertyClearingProblemsAndProperties from "../../components/service-page/propertyClearingProblemsAndProperties";
import PropertyClearingMaintenanceVsOneTime from "../../components/service-page/propertyClearingMaintenanceVsOneTime";

/* REUSED */
import WhiteGloveProgram from "../../components/service-page/whiteGloveProgram";
import PropertyClearingStartCTA from "../../components/service-page/propertyClearingStartCTA";
import ContactInfo from "../../components/service-page/contactInfo";

export default function PropertyClearingServicesPage() {
  return (
    <>
      <Head>
        <title>
          Property Clearing Services | Blue Trust Water Management
        </title>
        <meta
          name="description"
          content="Professional property clearing services to maintain compliance, safety, and long-term site usability."
        />
      </Head>

      <HeaderThree />

      <main>
        {/* HERO */}
        <ServiceHero {...serviceHeroes.propertyClearingServices} />

        <PropertyClearingOverview />

        <PropertyClearingWhyNeeded />

        <PropertyClearingIncludes />

        <PropertyClearingProblemsAndProperties />

        <PropertyClearingMaintenanceVsOneTime />

        <WhiteGloveProgram />

        <PropertyClearingStartCTA />

        <ContactInfo />
      </main>
    </>
  );
}
