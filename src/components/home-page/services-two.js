import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";
import * as LuIcons from "react-icons/lu";
import * as PiIcons from "react-icons/pi";
import * as GoIcons from "react-icons/go";
import * as RiIcons from "react-icons/ri";

const ICON_LIBRARIES = {
  Md: MdIcons,
  Ai: AiIcons,
  Tb: TbIcons,
  Lu: LuIcons,
  Pi: PiIcons,
  Go: GoIcons,
  Ri: RiIcons,
};

function ServicesTwo({ features }) {
  return (
    <div className="olympus-sky" style={{ paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-2xl)' }}>
      <div className="custom-container">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 3.5rem)',
              fontWeight: 700,
              letterSpacing: 'var(--tracking-display)',
              color: 'var(--marble-white)',
              lineHeight: 'var(--leading-display)',
            }}
          >
            Tools & Features that<br />
            Help You Play Smarter
          </h1>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features?.map((feature, index) => {
            const iconName = feature?.icon;
            const prefix = iconName?.substring(0, 2);
            const IconLibrary = ICON_LIBRARIES[prefix];
            const Icon = IconLibrary ? IconLibrary[iconName] : null;

            return (
              <div className="olympus-card group" key={feature?.title || index}>
                <div className="flex items-center justify-between gap-2">
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-body-lg)',
                      fontWeight: 600,
                      letterSpacing: 'var(--tracking-display)',
                      color: 'var(--marble-white)',
                    }}
                  >
                    {feature?.title}
                  </h3>
                  {Icon && (
                    <Icon
                      className="text-2xl md:text-3xl transition duration-300"
                      style={{ color: 'var(--gold-primary)' }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServicesTwo;
