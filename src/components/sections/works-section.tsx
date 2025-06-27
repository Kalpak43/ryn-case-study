import Section from "../ui/section";
import Card from "../work-card";

const works = [
  {
    image: "/assets/envelope.png",
    title: "Analysis Application",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    tags: ["Figma", "UX"],
    link: "/",
  },
  {
    image: "/assets/fortknox-app.png",
    title: "Fortknox Application",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    tags: ["Mobile", "Web"],
    link: "/",
  },
  {
    image: "/assets/zenocide-app.png",
    title: "Zenocide Application",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    tags: ["App", "Web"],
    link: "/",
  },
];

function Works() {
  return (
    <Section>
      <div className="flex items-center justify-between">
        <h2 className="h2-bold">
          <img
            src="/assets/star.svg"
            alt="star"
            className="w-8 h-8 inline align-middle mb-1"
          />
          <span> Works</span>
        </h2>

        <a href="/" className="underline text-lg font-[500] font-syne">
          view all
        </a>
      </div>

      <div className="space-y-8">
        {works.map((work, index) => (
          <Card
            key={index}
            image={work.image}
            title={work.title}
            description={work.description}
            tags={work.tags}
            link={work.link}
          />
        ))}
      </div>
    </Section>
  );
}

export default Works;
