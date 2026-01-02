import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";

/* CONTENT SOURCE */
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTION 2 */
import GeotechnicalOverview from "../../components/service-page/geotechnicalOverview";

/* SECTION 3 */
import FloridaGeotechImportance from "../../components/service-page/floridaGeotechImportance";

/* SECTION 4 */
import GeotechnicalServicesProvided from "../../components/service-page/geotechnicalServicesProvided";

/* SECTION 5 */
import WhyBlueTrustGeotechnical from "../../components/service-page/whyBlueTrustGeotechnical";

/* SECTION 6 — REUSED */
import BlueTrustReport from "../../components/service-page/blueTrustReport";

/* SECTION 7 */
import GeotechnicalTestingProcess from "../../components/service-page/geotechnicalTestingProcess";

/* SECTION 8 */
import GeotechnicalStartCTA from "../../components/service-page/geotechnicalStartCTA";

/* SECTION 9 — REUSED */
import ContactInfo from "../../components/service-page/contactInfo";

export default function GeotechnicalDrainageReportsPage() {
  return (
    <>
      <Head>
        <title>
          Geotechnical & Drainage Reports | Blue Trust Water Management
        </title>
        <meta
          name="description"
          content="Geotechnical and drainage reports supporting safe development, permitting, and construction across Florida."
        />
      </Head>

      {/* GLOBAL HEADER */}
      <HeaderThree />

      <main>
        {/* HERO — WIRED TO CONTENT */}
        <ServiceHero {...serviceHeroes.geotechnicalDrainageReports} />

        <GeotechnicalOverview />

        <FloridaGeotechImportance />

        <GeotechnicalServicesProvided />

        <WhyBlueTrustGeotechnical />

        <BlueTrustReport />

        <GeotechnicalTestingProcess />

        <GeotechnicalStartCTA />

        <ContactInfo />
      </main>
    </>
  );
}
