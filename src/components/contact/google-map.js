import { TiSocialLinkedin } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { TfiYoutube } from "react-icons/tfi";
import { SlSocialFacebook } from "react-icons/sl";

function GoogleMap() {
  return (
    <div className="custom-container" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-2xl)' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Info & Social */}
        <div className="space-y-2" style={{ fontSize: 'var(--text-body)', color: 'var(--marble-warm)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-subsection)',
              fontWeight: 600,
              color: 'var(--marble-white)',
              letterSpacing: 'var(--tracking-display)',
            }}
          >
            Goonzerflow
          </h2>
          <p>Tampa, Florida</p>
          <p>hello@goonzerflow.com</p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-4 pt-4">
            {[
              { icon: <TiSocialLinkedin />, label: "LinkedIn" },
              { icon: <SlSocialFacebook />, label: "Facebook" },
              { icon: <FaXTwitter />, label: "Twitter" },
              { icon: <FiInstagram />, label: "Instagram" },
              { icon: <TfiYoutube />, label: "YouTube" },
            ].map(({ icon, label }, idx) => (
              <span
                key={idx}
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl transition-transform hover:scale-105"
                style={{ background: 'var(--gold-primary)', color: 'var(--olympus-navy)' }}
                aria-label={label}
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="w-full">
          <iframe
            className="w-full h-[300px] md:h-[465px] rounded-lg shadow-md"
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117541.64883840238!2d-82.30639480012621!3d27.97717360988615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c45a14f86819%3A0x8fb7fdf0003eb501!2sGeoPoint%20Surveying%20Inc!5e0!3m2!1sen!2sus!4v1742789247750!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default GoogleMap;
