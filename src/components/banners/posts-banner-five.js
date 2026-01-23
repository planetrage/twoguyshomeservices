import Link from 'next/link';
import Image from 'next/image';
import { FaClock } from 'react-icons/fa';

function BannerTwo() {
  return (
    <div className="custom-container pt-24 pb-12 text-black space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <FaClock />
            <span>11/23/2024</span>
            <span className="border-l border-black pl-2">News &amp; Events</span>
          </div>
          <p className="text-[20px]">
            Utility locating companies play a crucial role in preventing damage to underground infrastructure by accurately identifying and marking buried utilities. With the increasing volume of excavation projects and the need for compliance with regulations, an advanced ticket management system (TMS) is essential for streamlining operations. Below are the top five features that a high-quality TMS should offer to enhance efficiency, accuracy, and compliance.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/images/posts/3.png"
            alt="SmartTIX Utility Dashboard"
            width={500}
            height={375}
            className="rounded-lg w-full h-auto"
            priority
          />
        </div>
      </div>
      {/* Article content */}
      <div className="prose max-w-none text-[18px] font-poppins space-y-10">

        {/* Feature Sections */}
        {[
          {
            title: '1. Automated Ticket Routing and Prioritization',
            desc: `An effective TMS should automatically categorize and route tickets based on urgency, location, and required resources.`,
            bullets: [
              'Smart Ticket Assignment – Automatically assigns tickets to the nearest or most qualified technicians.',
              'Priority-Based Scheduling – Flags high-risk or time-sensitive tickets for immediate handling.',
              'Auto-Generated Notifications – Sends alerts to technicians and dispatch teams about new or updated tickets.',
              'Integration with One-Call Centers – Seamlessly pulls ticket requests from 811 or other regulatory systems.',
              'Duplicate Ticket Detection – Prevents redundant tickets from clogging the workflow.'
            ]
          },
          {
            title: '2. GIS Integration for Enhanced Mapping',
            desc: `Geographic Information System (GIS) integration allows utility locators to visualize excavation sites with precise mapping data.`,
            bullets: [
              'Interactive Maps – Real-time visualization of ticket locations and underground infrastructure.',
              'Layered Utility Data – Overlays historical and real-time data of buried utilities.',
              'GPS-Enabled Location Accuracy – Ensures field teams can locate sites with precision.',
              'Weather and Terrain Insights – Displays environmental factors that may impact locating efforts.',
              'Augmented Reality (AR) Support – Uses AR to help field crews visualize underground utilities.'
            ]
          },
          {
            title: '3. Mobile Accessibility and Field Communication',
            desc: `A cloud-based TMS with mobile accessibility enables field technicians to receive, update, and close tickets in real time.`,
            bullets: [
              'Real-Time Ticket Updates – Update ticket statuses directly from the field.',
              'Offline Mode – Allows data entry in low-signal areas with sync capability.',
              'Photo and Video Attachments – Supports multimedia uploads for documentation.',
              'Voice-to-Text Notes – Dictate notes for faster input and clarity.',
              'Live GPS Tracking – Optimize dispatching and monitor technician locations.'
            ]
          },
          {
            title: '4. Automated Compliance and Reporting Tools',
            desc: `Regulatory compliance is critical in utility locating. Failing to meet one-call center requirements can lead to penalties.`,
            bullets: [
              'Auto-Generated Compliance Reports – For audits and regulatory use.',
              'Time-Stamped Activity Logs – Tracks all ticket actions.',
              'E-Signature and Digital Documentation – Secures approvals and documents.',
              'Automated Ticket Closure Notices – Sends final records to stakeholders.',
              'Custom Compliance Dashboards – Real-time compliance monitoring.'
            ]
          },
          {
            title: '5. AI-Powered Analytics and Predictive Insights',
            desc: `The best TMS solutions offer predictive insights into ticket volumes, peak demand, and risk zones using AI.`,
            bullets: [
              'Predictive Ticket Demand Forecasting – Anticipates peak excavation times.',
              'Automated Workforce Optimization – Suggests optimal staffing plans.',
              'Risk Analysis & Anomaly Detection – Flags repeated risk-prone areas.',
              'Damage Prevention Alerts – Identifies high-risk excavation requests.',
              'Performance Metrics & KPIs – Tracks field productivity and compliance.'
            ]
          }
        ].map((section, i) => (
          <div key={i}>
            <h3 className="text-[24px] font-bold">{section.title}</h3>
            <p>{section.desc}</p>
            <p className="font-semibold mt-4">Key Features:</p>
            <ul className="list-disc ml-6 space-y-1">
              {section.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Conclusion */}
        <div>
          <h3 className="text-[24px] font-bold">Conclusion</h3>
          <p>
            Investing in an advanced ticket management system is essential for utility locating companies looking to enhance efficiency, accuracy, and compliance. By leveraging features like automated ticket routing, GIS mapping, mobile accessibility, compliance automation, and AI-powered analytics, companies can streamline their operations and reduce the risk of utility damages.
          </p>
        </div>

        {/* SmartTIX CTA */}
        <div>
          <h3 className="text-[24px] font-bold">SmartTIX Modernizes Ticket Management</h3>
          <p>
            From field technicians and supervisors to business leaders, SmartTIX empowers every stakeholder with the most cost-effective, time-saving ticket management solution available.
          </p>
          <p>
            Learn more by
            <Link href="/demo" className="text-[#3754ED] underline px-1">
              scheduling a demo
            </Link>
            with our expert team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerTwo;