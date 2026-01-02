import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";

/* CONTENT SOURCE — NOTE THE CAPITAL S */
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTION 2 */
import BoundarySurveyOverview from "../../components/service-page/boundarySurveyOverview";

/* SECTION 3 */
import WhySurveyBeforeAnything from "../../components/service-page/whySurveyBeforeAnything";

/* SECTION 4 */
import SurveyServicesProvided from "../../components/service-page/surveyServicesProvided";

/* SECTION 5 */
import WhyBlueTrustSurveys from "../../components/service-page/whyBlueTrustSurveys";

/* SECTION 6 */
import SurveyProcess from "../../components/service-page/surveyProcess";

/* SECTION 7 */
import BlueTrustReport from "../../components/service-page/blueTrustReport";

/* SECTION 8 */
import SurveyStartCTA from "../../components/service-page/surveyStartCTA";

/* SECTION 9 */
import ContactInfo from "../../components/service-page/contactInfo";

export default function BoundaryTopographicSurveysPage() {
  return (
    <>
      <Head>
        <title>Boundary & Topographic Surveys | Blue Trust Water Management</title>
        <meta
          name="description"
          content="Boundary and topographic surveying services supporting land development, permitting, and construction accuracy."
        />
      </Head>

      {/* GLOBAL HEADER */}
      <HeaderThree />

      <main>
        {/* HERO — WIRED TO CONTENT */}
        <ServiceHero {...serviceHeroes.boundaryTopographicSurveys} />

        <BoundarySurveyOverview />

        <WhySurveyBeforeAnything />

        <SurveyServicesProvided />

        <WhyBlueTrustSurveys />

        <SurveyProcess />

        <BlueTrustReport />

        <SurveyStartCTA />

        <ContactInfo />
      </main>
    </>
  );
}
