import Section from "../ui/section";

function Expertise() {
  return (
    <Section>
      <h2 className="h2-bold">
        <img
          src="/assets/star.svg"
          alt="star"
          className="w-8 h-8 inline align-middle mb-1"
        />
        <span> Expertise</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Branding */}
        <div className="space-y-4">
          <h3 className="text-xl text-white font-medium flex items-center gap-3">
            <span className="w-2 h-2 bg-white block"></span>
            Branding
          </h3>
          <p className=" leading-relaxed">
            I create efficient, adaptable, and engaging websites. No predefined
            patterns. No sluggish, complex code. Webflow forms the foundation of
            my web development approach. I employ it to provide safe, top-notch
            bespoke websites.
          </p>
        </div>

        {/* UI Design */}
        <div className="space-y-4">
          <h3 className="text-xl text-white font-medium flex items-center gap-3">
            <span className="w-2 h-2 bg-white block"></span>
            UI Design
          </h3>
          <p className=" leading-relaxed">
            I create efficient, adaptable, and engaging websites. No predefined
            patterns. No sluggish, complex code. Webflow forms the foundation of
            my web development approach. I employ it to provide safe, top-notch
            bespoke websites.
          </p>
        </div>

        {/* UX Design */}
        <div className="space-y-4">
          <h3 className="text-xl text-white font-medium flex items-center gap-3">
            <span className="w-2 h-2 bg-white block"></span>
            UX Design
          </h3>
          <p className=" leading-relaxed">
            I comprehend and resolve digital product issues using a user-focused
            methodology. Investigation, compassion, and visual conveyance are a
            few techniques I apply to captivate and involve your users while
            fulfilling your business requirements.
          </p>
        </div>

        {/* Development */}
        <div className="space-y-4">
          <h3 className="text-xl text-white font-medium flex items-center gap-3">
            <span className="w-2 h-2 bg-white block"></span>
            Development
          </h3>
          <p className=" leading-relaxed">
            I create user-friendly, adaptive, engaging websites. No
            cookie-cutters. No cumbersome, complex coding. Webflow forms the
            foundation of my web development approach. I employ it to produce
            safe, top-notch personalized websites.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Expertise;
