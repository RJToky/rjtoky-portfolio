import Section from "../../../components/Section";
import pattern from "../../../assets/img/Pattern/Light.png";
import patternSm from "../../../assets/img/Pattern/Light-sm.png";
import computer from "../../../assets/img/Computer.png";
import {
  LiaEnvelope,
  LiaFacebookF,
  LiaGithub,
  LiaLinkedinIn,
} from "react-icons/lia";
import { Link } from "react-router-dom";
import Reveal from "../../../components/Reveal";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <div className="w-full absolute top-0 left-0">
        <motion.div
          className="relative md:h-screen h-[80vh]"
          ref={ref}
          variants={{
            visible: { opacity: 1 },
          }}
          initial={{ opacity: 0 }}
          animate={mainControls}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <img
            src={pattern}
            alt="Pattern"
            className="opacity-[0.08] h-full w-full object-cover hidden md:block"
          />
          <img
            src={patternSm}
            alt="Pattern"
            className="opacity-[0.1] h-full w-full object-cover block md:hidden"
          />
          <div className="bg-gradient-to-b from-transparent to-dark w-full absolute top-0 h-full"></div>
        </motion.div>
      </div>
      <Section className="min-h-[calc(100vh-105px)] relative flex md:justify-between md:items-center md:flex-row flex-col md:py-0 py-20 gap-y-20">
        <div>
          <Reveal delay={0.5}>
            <p className="lg:text-4xl sm:text-3xl text-2xl text-white font-monument-regular leading-none mb-5 flex items-end">
              Hello
              <span className="md:w-2 md:h-2 w-1.5 h-1.5 bg-primary rounded-full ml-1 md:mb-2 mb-1"></span>
            </p>
          </Reveal>
          <Reveal delay={0.7}>
            <p className="lg:text-7xl md:text-6xl text-5xl text-white font-montserrat-bold leading-none mb-5">
              I'm <span className="text-primary">Toky</span>
            </p>
          </Reveal>
          <Reveal delay={0.7}>
            <p className="lg:text-3xl md:text-2xl text-xl text-white font-montserrat-semibold mt-4 flex items-center mb-5">
              <span className="lg:w-12 w-8 h-1 rounded bg-white mr-3"></span>
              Full Stack Developer
            </p>
          </Reveal>
          <div className="flex items-center gap-3">
            <Reveal delay={0.7}>
              <Link
                to={"https://linkedin.com/in/toky-rakotoarivony-5aba3a237"}
                target="_blank"
              >
                <LiaLinkedinIn
                  className="text-white hover:text-opacity-70 transition"
                  size={22}
                />
              </Link>
            </Reveal>
            <Reveal delay={0.8}>
              <Link to={"https://github.com/RJToky"} target="_blank">
                <LiaGithub
                  className="text-white hover:text-opacity-70 transition"
                  size={22}
                />
              </Link>{" "}
            </Reveal>
            <Reveal delay={0.9}>
              <Link to="mailto:tokyrakotoarivony5@gmail.com">
                <LiaEnvelope
                  className="text-white hover:text-opacity-70 transition"
                  size={22}
                />
              </Link>{" "}
            </Reveal>
            <Reveal delay={1}>
              <Link
                to={"https://www.facebook.com/toky.rakotoarivony.58/"}
                target="_blank"
              >
                <LiaFacebookF
                  className="text-white hover:text-opacity-70 transition"
                  size={22}
                />
              </Link>{" "}
            </Reveal>
          </div>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <img
            src={computer}
            alt=""
            className="lg:max-w-96 sm:max-w-80 max-w-64 mx-auto"
          />
        </motion.div>
      </Section>
    </>
  );
}
