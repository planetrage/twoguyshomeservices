import Link from 'next/link';
import Image from 'next/image';
import { FaClock } from 'react-icons/fa';

function BannerTwo() {
  return (
    <div className="custom-container pt-24 pb-12 space-y-12 text-black">
      {/* Top section with date and intro */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <FaClock />
            <span>11/23/2024</span>
            <span className="border-l border-black pl-2">News &amp; Events</span>
          </div>

          <p className="text-[20px]">
            In the fast-paced world of utility locating, efficiency, accuracy, and compliance are critical to preventing costly damages and ensuring smooth excavation projects. Many companies still rely on outdated ticket management systems (TMS) that slow down operations and increase the risk of errors. If your company is still using an older system, now is the time to consider an upgrade. Here are three compelling reasons why upgrading your ticket management system is a smart investment.
          </p>
        </div>

        <div className="flex-1">
          <Image
            src="/images/posts/2.png"
            alt="Ticket Management System"
            width={500}
            height={375}
            className="rounded-lg w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Article content */}
      <div className="prose max-w-none text-[18px] space-y-10 font-poppins">

        {/* Section 1 */}
        <div>
          <h3 className="text-[24px] font-bold">
            1. Improve Efficiency and Reduce Ticket Processing Time
          </h3>
          <p>
            Managing a high volume of locate requests can be overwhelming, especially if your current TMS lacks automation and integration capabilities. A modern TMS streamlines ticket processing, allowing your team to focus on fieldwork rather than manual data entry and administrative tasks.
          </p>
          <p className="font-semibold mt-4">How an Upgraded TMS Enhances Efficiency:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Automated Ticket Routing – Assigns tickets to the right technician based on location, priority, and workload</li>
            <li>Real-Time Updates – Allows field crews to access and update ticket information instantly via mobile apps</li>
            <li>Bulk Ticket Processing – Processes multiple tickets at once, reducing the time spent on administrative work</li>
            <li>Integration with One-Call Centers – Automatically imports and processes tickets from 811 and other systems</li>
          </ul>
          <p className="mt-4">
            By reducing time spent on repetitive tasks, an advanced TMS helps your team handle more tickets efficiently and meet deadlines with greater ease.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-[24px] font-bold">
            2. Enhance Accuracy and Reduce Risk of Errors
          </h3>
          <p>
            Aging ticket management systems often rely on manual data entry and outdated mapping tools, increasing the likelihood of errors that can lead to costly utility damages or project delays. Upgrading to a modern TMS ensures greater accuracy in locate requests and field operations.
          </p>
          <p className="font-semibold mt-4">How an Advanced TMS Improves Accuracy:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>GIS and GPS Integration – Accurate mapping and real-time location tracking for precise utility marking</li>
            <li>Automated Duplicate Ticket Detection – Prevents technicians from working on redundant or conflicting tickets</li>
            <li>Photo and Documentation Uploads – Field crews can attach images and notes for better recordkeeping</li>
            <li>Standardized Data Entry – Reduces human errors through structured input formats and validation rules</li>
          </ul>
          <p className="mt-4">
            By improving accuracy, your company can reduce costly mistakes, avoid liability issues, and maintain a strong reputation in the industry.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-[24px] font-bold">
            3. Strengthen Compliance and Improve Reporting Capabilities
          </h3>
          <p>
            Regulatory compliance is a critical aspect of utility locating. Failing to meet one-call center requirements or keep proper documentation can result in fines, legal disputes, and project shutdowns. An outdated TMS may lack the reporting tools needed to maintain compliance and prepare for audits.
          </p>
          <p className="font-semibold mt-4">How an Upgraded TMS Supports Compliance:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Automated Compliance Tracking – Logs all ticket actions, timestamps, and technician responses for audit readiness</li>
            <li>Customizable Reporting Tools – Generates reports for regulatory bodies, project managers, and internal reviews</li>
            <li>E-Signature and Digital Documentation – Stores approval records and compliance documents securely</li>
            <li>Real-Time Compliance Dashboards – Provides an overview of ticket statuses, response times, and regulatory adherence</li>
          </ul>
          <p className="mt-4">
            A modern TMS not only helps you meet industry standards but also ensures your company is always prepared for inspections and legal requirements.
          </p>
        </div>

        {/* Conclusion */}
        <div>
          <h3 className="text-[24px] font-bold">Conclusion</h3>
          <p>
            Upgrading your ticket management system is more than just a software update—it’s an investment in efficiency, accuracy, and compliance. By modernizing your TMS, your utility locating company can process tickets faster, reduce errors, and maintain full regulatory compliance. Don’t wait until outdated technology slows down your operations—take the step toward a smarter, more efficient system today.
          </p>
        </div>

        {/* SmartTix Promo */}
        <div>
          <h3 className="text-[24px] font-bold">SmartTix Modernizes Ticket Management</h3>
          <p>
            From field technicians and supervisors to leaders managing the business, SmartTix empowers every stakeholder to work smarter using the most cost-effective, time-saving ticket management solution on the market.
          </p>
          <p>
            Learn more about the features and benefits of SmartTix by
            <Link href="/demo">
              <a className="text-[#3754ED] px-1 underline">scheduling a demo</a>
            </Link>
            with our expert team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerTwo;