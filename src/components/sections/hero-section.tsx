import Marquee from "react-fast-marquee";

const companies = ["proline", "doradesign", "wavefun", "silsila", "convertkit"];

function Hero() {
  return (
    <section className="py-44 px-25 space-y-28">
      <h1 className="text-center">
        <span>I am a </span>
        <img
          src="/assets/face.png"
          alt="avatar"
          className="w-32 h-16 inline align-top"
        />
        <span> Freelance </span>
        <span> designer </span>
        <img
          src="/assets/fortknox.png"
          alt="avatar"
          className="w-32 h-16 inline align-top"
        />
        <span> from san francisco</span>
      </h1>

      <div className="flex items-center justify-between gap-8">
        <Marquee>
          {companies.map((name) => (
            <img
              key={name}
              src={`/assets/${name}.svg`}
              alt={name}
              className="mx-24 h-8"
            />
          ))}
        </Marquee>
        <p className="max-w-lg">
          Welcome to my portfolio. Here, artistry meets functionality. Dive into
          a curated showcase of distinctive branding and web designs, each
          crafted to captivate and inspire.
        </p>
      </div>
    </section>
  );
}

export default Hero;
