import Head from "next/head";
import HeaderThree from "../../components/header/header-3";

/* HERO */
import ServiceHero from "../../components/service-page/servicehero";

/* CONTENT SOURCE */
import { serviceHeroes } from "../../content/ServiceHeroes";

/* SECTION 2 */
import PermittingOverview from "../../components/service-page/permittingOverview";

/* SECTION 3 */
import PermitsHandledAndSituations from "../../components/service-page/PermitsHandledAndSituations";

/* SECTION 4 */
import PermittingAdvocateRole from "../../components/service-page/permittingAdvocateRole";

/* SECTION 5 */
import EngineerOversightIncluded from "../../components/service-page/EngineerOversightIncluded";

/* SECTION 6 */
import BlueTrustReport from "../../components/service-page/blueTrustReport";

/* SECTION 7 */
import PermittingStartCTA from "../../components/service-page/permittingStartCTA";

/* SECTION 8 */
import ContactInfo from "../../components/service-page/contactInfo";

export default function PermittingAgencyCoordinationPage() {
  return (
    <>
      <Head>
        <title>
          Permitting & Agency Coordination | Blue Trust Water Management
        </title>
        <meta
          name="description"
          content="Permitting and agency coordination services to guide land development projects through approvals, compliance, and regulatory processes."
        />
      </Head>

      {/* GLOBAL HEADER */}
      <HeaderThree />

      <main>
        {/* HERO — WIRED TO CONTENT */}
        <ServiceHero {...serviceHeroes.permittingAgencyCoordination} />

        <PermittingOverview />

        <PermitsHandledAndSituations />

        <PermittingAdvocateRole />

        <EngineerOversightIncluded />

        <BlueTrustReport />

        <PermittingStartCTA />

        <ContactInfo />
      </main>
    </>
  );
}
