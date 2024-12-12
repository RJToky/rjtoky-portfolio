import Section from "../../../components/Section";
import { Colors } from "../../../utils/colors";

export default function Skills() {
  return (
    <Section className="py-24 relative flex flex-col justify-center">
      <h2
        className="text-7xl font-monument-regular mb-20 text-stroke uppercase opacity-70 flex items-center gap-10 mx-auto tracking-wide"
        style={{ WebkitTextStroke: `1px white` }}
      >
        <span className="w-32 h-[1px] bg-white"></span>
        Skills
        <span className="w-32 h-[1px] bg-white"></span>
      </h2>

      <div>
        <h2 className="text-5xl font-monument-regular mb-10 text-white">
          What I <span className="text-primary">Do</span> ?
        </h2>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h3 className="text-white text-2xl font-montserrat-semibold mb-5">
              App & Web Interfaces
            </h3>
            <p className="text-base text-white text-opacity-80 font-montserrat-regular mb-5">
              I create user-friendly interfaces with a focus on smooth
              interactions and responsive designs, ensuring an engaging digital
              experience across platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                Angular
              </span>
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                React JS
              </span>
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                React Native
              </span>
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                Flutter
              </span>
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                Sass
              </span>
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                Tailwind CSS
              </span>
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                Bootstrap
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-white text-2xl font-montserrat-semibold mb-5">
              API & Database Management
            </h3>
            <p className="text-base text-white text-opacity-80 font-montserrat-regular mb-5">
              I develop secure back-end systems and manage databases, ensuring
              efficient data processing, robust APIs, and seamless system
              integration.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                Spring boot
              </span>
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                .NET Core
              </span>
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                Laravel
              </span>
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                Django
              </span>
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                PostgreSQL
              </span>
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                MySQL
              </span>
              <span className="text-white/80 rounded-full font-montserrat-regular text-sm px-4 py-1 border border-primary/80">
                MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-[50rem] h-[50rem] rounded-full absolute top-0 translate-y-[-10%] left-[-30rem]"
        style={{
          background: `radial-gradient(circle, ${Colors.primary} -100%, transparent 60%)`,
        }}
      ></div>
    </Section>
  );
}
