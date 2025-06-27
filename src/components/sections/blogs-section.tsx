import BlogCard from "../blog-card";
import Section from "../ui/section";

const blogs = [
  {
    image: "/assets/envelope.png",
    date: "Nov 9, 2023",
    title: "How UX works in web",
    tags: ["UI", "UX"],
    link: "/blog/understanding-user-experience-design",
  },
  {
    image: "/assets/fortknox-app.png",
    date: "Aug 18, 2023",
    title: "Case study - Analysis Application.",
    tags: ["Design", "Print"],
    link: "/blog/importance-of-accessibility-in-web-design",
  },
  {
    image: "/assets/zenocide-app.png",
    date: "Feb 16, 2023",
    title: "3 ways to develop your skill",
    tags: ["Figma", "Web"],
    link: "/blog/importance-of-accessibility-in-web-design",
  },
];

function Blogs() {
  return (
    <Section>
      <div className="flex items-center justify-between">
        <h2 className="h2-bold">
          <img
            src="/assets/star.svg"
            alt="star"
            className="w-8 h-8 inline align-middle mb-1"
          />
          <span> Blogs</span>
        </h2>

        <a href="/" className="underline text-lg font-[500] font-syne">
          view all
        </a>
      </div>

      <div className="space-y-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </Section>
  );
}

export default Blogs;
