import Section from "../../../components/Section";
import me from "../../../assets/img/Me.jpg";

export default function About() {
  return (
    <Section className="py-24 relative min-h-screen flex flex-col items-center justify-center">
      <h2
        className="text-7xl font-monument-regular mb-20 text-stroke uppercase opacity-40 flex items-center gap-10"
        style={{ WebkitTextStroke: `1px white` }}
      >
        <span className="w-32 h-[1px] bg-white"></span>
        About Me
        <span className="w-32 h-[1px] bg-white"></span>
      </h2>
      <div className="flex items-center h-full relative z-10 gap-x-20">
        <div className="w-fit flex flex-col items-center">
          <img
            src={me}
            alt="Me"
            className="rounded-full w-52 h-52 object-cover brightness-90 border-4 border-white mb-5"
          />
          <h3 className="text-2xl font-montserrat-medium text-white  text-center">
            Rakotoarivony
          </h3>
          <h3 className="text-2xl font-montserrat-medium text-white  text-center">
            Judichael Tokiniaina
          </h3>
        </div>
        <div className="flex-1">
          <h2 className="text-5xl font-monument-regular mb-10 text-white">
            <span className="text-primary">Who</span> I Am ?
          </h2>
          <p className="text-base text-white text-opacity-80 font-montserrat-regular mb-5 text-justify">
            I am a Full Stack Developer with 2 years of experience. I have a
            passion for web development and love to create websites and web
            applications. I am always eager to learn new technologies and
            improve my skills.
          </p>
          <p className="text-base text-white text-opacity-80 font-montserrat-regular mb-5 text-justify">
            I am currently looking for new opportunities to work on exciting
            projects and grow as a developer.
          </p>
        </div>
      </div>

      {/* <div
        className="w-[50rem] h-[50rem] rounded-full absolute top-0 translate-y-[-10%] left-[-30rem]"
        style={{
          background: `radial-gradient(circle, ${Colors.primary} -100%, transparent 60%)`,
        }}
      ></div> */}
    </Section>
  );
}
