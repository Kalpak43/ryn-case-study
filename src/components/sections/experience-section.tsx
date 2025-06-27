import Section from "../ui/section";

const experience = [
  {
    title: "Lead Product Designer",
    company: "Fortknox",
    duration: "Mar 2022 - Oct 2023",
  },
  {
    title: "Intern Designer",
    company: "OmniSafe",
    duration: "Mar 2022 - Oct 2023",
  },
  {
    title: "UI Designer",
    company: "Doradesign",
    duration: "Mar 2022 - Oct 2023",
  },
  {
    title: "Frontend Developer",
    company: "OpacityAuthor",
    duration: "Mar 2022 - Oct 2023",
  },
];

function Experience() {
  return (
    <Section>
      <h2 className="h2-bold">
        <img
          src="/assets/star.svg"
          alt="star"
          className="w-8 h-8 inline align-middle mb-1"
        />
        <span> Experience</span>
      </h2>
      <div>
        <ul className="space-y-8">
          {experience.map((exp, index) => (
            <li
              key={index}
              className="flex items-center justify-between gap-2 py-2 border-b border-white/50"
            >
              <h3>{exp.title}</h3>
              <div className="text-right">
                <h5>{exp.company}</h5>
                <p className="text-white max-md:text-xs">{exp.duration}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Experience;
