import { Link } from "react-router-dom";
import Section from "../../../components/Section";
import { Colors } from "../../../utils/colors";

export default function Experiences() {
  return (
    <Section className="md:py-28 py-20 relative flex flex-col">
      <div className="relative z-10">
        <h2
          className="lg:text-5xl md:text-4xl text-3xl font-monument-regular md:mb-20 mb-10 text-stroke uppercase opacity-40 flex items-center md:gap-10 gap-5 tracking-wide text-center"
          style={{ WebkitTextStroke: `1px white` }}
        >
          {/* <span className="w-32 h-[1px] bg-white"></span> */}
          Experiences
          <span className="lg:w-32 md:w-28 w-20 h-[1px] bg-white"></span>
        </h2>
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-monument-regular mb-10 text-white">
          What I've <span className="text-primary">Done</span> ?
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white bg-opacity-[0.01] md:p-8 p-5 border border-white/10 rounded-lg">
            <h4 className="text-base text-white/40 text-opacity-80 font-montserrat-medium">
              Feb. 2023 - Nov. 2024
            </h4>
            <Link to="https://www.kanteco.com/" target="_blank">
              <h3 className="text-2xl font-montserrat-semibold text-primary hover:text-opacity-70 transition mb-1">
                Kante Company &#8599;
              </h3>
            </Link>
            <h4 className="text-base font-montserrat-regular uppercase text-white mb-5">
              Full Stack Developer, Internship
            </h4>
            <ul className="list-disc pl-5">
              <li className="text-base text-white text-opacity-80 font-montserrat-regular">
                Developed a web application for the company's internal use.
              </li>
              <li className="text-base text-white text-opacity-80 font-montserrat-regular">
                Implemented a user-friendly interface for the application.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="w-[50rem] h-[50rem] rounded-full absolute top-0 translate-y-[-10%] right-[-30rem]"
        style={{
          background: `radial-gradient(circle, ${Colors.primary} -100%, transparent 60%)`,
        }}
      ></div>
    </Section>
  );
}
