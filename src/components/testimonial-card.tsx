function TestimonialCard({
  profileImage,
  name,
  company,
  testimonial,
}: {
  profileImage: string;
  name: string;
  company: string;
  testimonial: string;
}) {
  return (
    <div className="py-4 flex items-center gap-8">
      <div className="py-4 flex-1 h-44">
        <div className="flex items-center gap-4">
          <img src={profileImage} alt="" className="w-16 h-16 rounded-full" />
          <div className="space-y-1">
            <h4>{name}</h4>
            <p className="text-lg">{company}</p>
          </div>
        </div>
      </div>
      <div className="max-w-[710px] py-8 relative">
        <img
          src="/assets/quote.svg"
          className="absolute -top-4 left-0 h-24 w-28"
        />

        <h3>{testimonial}</h3>
      </div>
    </div>
  );
}

export default TestimonialCard;
