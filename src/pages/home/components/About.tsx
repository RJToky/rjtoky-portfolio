import Section from "../../../components/Section";
import me from "../../../assets/img/Me.webp";

export default function About() {
  return (
    <Section className="md:py-28 py-20 relative flex flex-col justify-center">
      <h2
        className="lg:text-5xl md:text-4xl text-3xl font-monument-regular md:mb-20 mb-10 text-stroke uppercase opacity-40 flex items-center md:gap-10 gap-5 tracking-wide md:mx-auto text-center"
        style={{ WebkitTextStroke: `1px white` }}
      >
        <span className="lg:w-32 md:w-28 w-20 md:block hidden h-[1px] bg-white"></span>
        About Me
        <span className="lg:w-32 md:w-28 w-20 h-[1px] bg-white"></span>
      </h2>
      <div className="flex md:flex-row flex-col-reverse items-center relative z-10 gap-x-20 gap-y-10">
        <div className="w-fit flex flex-col items-center">
          <img
            src={me}
            alt="Me"
            className="rounded-full md:w-52 w-44 md:h-52 h-44 object-cover brightness-90 border-4 border-white mb-5"
          />
          <h3 className="md:text-2xl text-xl font-montserrat-medium text-white  text-center">
            Rakotoarivony
          </h3>
          <h3 className="md:text-2xl text-xl font-montserrat-medium text-white  text-center">
            Judichael Tokiniaina
          </h3>
        </div>
        <div className="flex-1">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-monument-regular mb-10 text-white">
            <span className="text-primary">Who</span> I Am ?
          </h2>
          <p className="text-base text-white text-opacity-80 font-montserrat-regular mb-5 text-justify">
            I am a Full Stack Developer with 2 years of experience. I have a
            passion for web development and love to create websites and web
            applications. I am always eager to learn new technologies and
            improve my skills.
          </p>
          <p className="text-base text-white text-opacity-80 font-montserrat-regular mb-5 text-justify">
            I enjoy working on challenging and innovative projects that push my
            limits, expand my skill set, and allow me to continuously grow as a
            developer. I thrive in environments where I can solve complex
            problems and contribute to the success of the team and the project.
          </p>
        </div>
      </div>
    </Section>
  );
}
