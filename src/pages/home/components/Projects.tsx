import Section from "../../../components/Section";
import myportoflio from "../../../assets/img/Projects/MyPortfolio.webp";
import eart from "../../../assets/img/Projects/Eart.webp";
import gascar from "../../../assets/img/Projects/Gascar.webp";

export default function Projects() {
  return (
    <Section className="md:py-28 py-20 relative flex flex-col z-10">
      <h2
        className="lg:text-5xl md:text-4xl text-3xl font-monument-regular md:mb-20 mb-10 text-stroke uppercase opacity-40 flex items-center md:gap-10 gap-5 tracking-wide text-center"
        style={{ WebkitTextStroke: `1px white` }}
      >
        {/* <span className="w-32 h-[1px] bg-white"></span> */}
        Projects
        <span className="lg:w-32 md:w-28 w-20 h-[1px] bg-white"></span>
      </h2>
      <h2 className="lg:text-5xl md:text-4xl text-3xl font-monument-regular mb-10 text-white">
        What I <span className="text-primary">Built</span> ?
      </h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-8 gap-14">
        <div className="flex flex-col gap-5">
          <div>
            <img
              src={myportoflio}
              alt="Mockup - MyPortfolio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <h3 className="text-2xl font-montserrat-semibold text-white mb-3">
              My Portfolio
            </h3>
            <p className="text-base text-white text-opacity-80 font-montserrat-regular mb-3">
              A portfolio website showcasing my skills and expertise.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                React JS
              </span>
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                Tailwind CSS
              </span>
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                Sass
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <img
              src={eart}
              alt="Mockup - Ear"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-montserrat-semibold text-white mb-3">
              Eart (Heart Art)
            </h3>
            <p className="text-base text-white text-opacity-80 font-montserrat-regular mb-3">
              A web platform to explore and share art and culture through
              exhibitions and performances.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                React JS
              </span>
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                Tailwind CSS
              </span>
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                Sass
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <img
              src={gascar}
              alt="Mockup - Gascar"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-montserrat-semibold text-white mb-3">
              Gascar
            </h3>
            <p className="text-base text-white text-opacity-80 font-montserrat-regular mb-3">
              A platform that simplifies buying and selling used cars, providing
              a secure space for transactions.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                React JS
              </span>
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                Spring Boot
              </span>
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                PostgreSQL
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="w-[50rem] h-[50rem] rounded-full absolute top-0 translate-y-[-10%] right-[-30rem]"
        style={{
          background: `radial-gradient(circle, ${Colors.primary} -100%, transparent 60%)`,
        }}
      ></div> */}
    </Section>
  );
}
