import Section from "../../../components/Section";
import pattern from "../../../assets/img/Pattern/Light.png";
import computer from "../../../assets/img/Computer.png";
import {
  LiaEnvelope,
  LiaFacebookF,
  LiaGithub,
  LiaLinkedinIn,
} from "react-icons/lia";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="w-full absolute top-0 left-0">
        <div className="relative h-screen">
          <img
            src={pattern}
            alt=""
            className="opacity-15 h-full w-full object-cover"
          />
          <div className="bg-gradient-to-b from-transparent to-dark w-full absolute top-0 h-full"></div>
        </div>
      </div>
      <Section className="min-h-[calc(100vh-105px)] relative flex justify-between items-center">
        <div>
          <p className="text-4xl text-white font-monument-regular leading-none mb-5 flex items-end">
            Hello
            <span className="w-2 h-2 bg-primary rounded-full ml-1 mb-2"></span>
          </p>
          <p className="text-8xl text-white font-montserrat-bold leading-none mb-5">
            I'm <span className="text-primary">Toky</span>
          </p>
          <p className="text-3xl text-white font-montserrat-semibold mt-4 flex items-center mb-5">
            <span className="w-12 h-1 rounded bg-white mr-3"></span>
            Full Stack Developer
          </p>
          <div className="flex items-center gap-3">
            <Link
              to={"https://linkedin.com/in/toky-rakotoarivony-5aba3a237"}
              target="_blank"
            >
              <LiaLinkedinIn
                className="text-white hover:text-opacity-70 transition"
                size={30}
              />
            </Link>
            <Link to={"https://github.com/RJToky"} target="_blank">
              <LiaGithub
                className="text-white hover:text-opacity-70 transition"
                size={30}
              />
            </Link>
            <Link to="mailto:tokyrakotoarivony5@gmail.com">
              <LiaEnvelope
                className="text-white hover:text-opacity-70 transition"
                size={30}
              />
            </Link>
            <Link
              to={"https://www.facebook.com/toky.rakotoarivony.58/"}
              target="_blank"
            >
              <LiaFacebookF
                className="text-white hover:text-opacity-70 transition"
                size={30}
              />
            </Link>
          </div>
        </div>
        <div>
          <img src={computer} alt="" className="w-96" />
        </div>
      </Section>
    </>
  );
}
