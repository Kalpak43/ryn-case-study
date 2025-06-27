import Button from "./ui/button";

function WorkCard({
  image,
  title,
  description,
  tags,
  link,
}: {
  image?: string;
  title?: string;
  description?: string;
  tags?: string[];
  link: string;
}) {
  return (
    <div className="bg-gray/48 rounded-[2.5rem] p-8 grid grid-cols-1 md:grid-cols-2 gap-8 relative overflow-hidden">
      <span className="absolute bottom-0 inset-x-0 mx-auto w-54 h-41 bg-accent rounded-[100%] blur-[100px] -z-1"></span>
      <div className="">
        <img src={image} alt="" className="rounded-3xl" />
      </div>
      <div className="flex flex-col justify-between gap-8">
        <div className="space-y-2">
          <h2 className="h2-semibold">{title}</h2>
          <p className="font-poppins text-lg leading-full tracking-0 text-white">
            {description}
          </p>
          <div className="space-x-2">
            {tags?.map((tag, index) => (
              <Button
                key={index}
                variant="outline"
                className="text-white hover:bg-white/10"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        <Button variant="default" asChild>
          <a href={link}>View Case Study</a>
        </Button>
      </div>
    </div>
  );
}

export default WorkCard;
