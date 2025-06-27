import Button from "./ui/button";

function BlogCard({
  image,
  date,
  title,
  tags,
  link,
}: {
  image: string;
  date: string;
  title: string;
  tags: string[];
  link: string;
}) {
  return (
    <div className="flex max-md:flex-col md:items-center justify-between gap-4 md:gap-8">
      <img
        src={image}
        alt={title}
        className="w-full md:w-71 md:h-54 rounded-3xl"
      />
      <div className="space-y-4 flex-1">
        <p className="text-lg">{date}</p>
        <h2 className="h2-semibold">{title}</h2>
        <div className="space-x-2">
          {tags.map((tag) => (
            <Button key={tag} variant="tag">
              {tag}
            </Button>
          ))}
        </div>
      </div>
      <Button variant="default" asChild>
        <a href={link}>Read More</a>
      </Button>
    </div>
  );
}

export default BlogCard;
