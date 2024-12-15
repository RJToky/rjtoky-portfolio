import Reveal from "../../../components/Reveal";
import Section from "../../../components/Section";
import { Colors } from "../../../utils/colors";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <Section className="md:py-28 py-20 relative flex flex-col justify-center">
      <div className="relative z-10" ref={ref}>
        <h2
          className="md:hidden flex lg:text-5xl md:text-4xl text-3xl font-monument-regular md:mb-20 mb-10 text-stroke uppercase opacity-40 items-center md:gap-10 gap-5 md:mx-auto tracking-wide text-center"
          style={{ WebkitTextStroke: `1px white` }}
        >
          <Reveal>Skills</Reveal>
          <motion.span
            className="lg:w-32 md:w-28 w-20 h-[1px] bg-white origin-left"
            variants={{
              visible: { scaleX: 1 },
            }}
            initial={{ scaleX: 0 }}
            animate={mainControls}
            transition={{ duration: 0.5 }}
          ></motion.span>
        </h2>
        <div className="flex items-center gap-10">
          <div className="lg:px-20 px-10 md:block hidden">
            <h2
              className="lg:text-5xl md:text-4xl text-3xl font-monument-regular text-stroke uppercase opacity-40 flex flex-col items-center gap-10 mx-auto tracking-wide"
              style={{ WebkitTextStroke: `1px white` }}
            >
              <motion.span
                className="w-[1px] h-20 bg-white origin-top"
                variants={{
                  visible: { scaleY: 1 },
                }}
                initial={{ scaleY: 0 }}
                animate={mainControls}
                transition={{ duration: 0.5 }}
              ></motion.span>
              <div className="flex flex-col items-center text-center">
                <Reveal>S</Reveal>
                <Reveal>k</Reveal>
                <Reveal>i</Reveal>
                <Reveal>l</Reveal>
                <Reveal>l</Reveal>
                <Reveal>S</Reveal>
              </div>
              <motion.span
                variants={{
                  visible: { scaleY: 1 },
                }}
                initial={{ scaleY: 0 }}
                animate={mainControls}
                transition={{ duration: 0.5 }}
                className="w-[1px] h-20 bg-white origin-top"
                ref={ref}
              ></motion.span>
            </h2>
          </div>
          <div className="flex-1">
            <Reveal delay={0.3}>
              <h2 className="lg:text-5xl md:text-4xl text-3xl font-monument-regular mb-10 text-white">
                What I <span className="text-primary">Do</span> ?
              </h2>
            </Reveal>
            <div className="grid lg:grid-cols-2 gap-x-10 gap-y-14">
              <div>
                <Reveal delay={0.4}>
                  <h3 className="text-white md:text-2xl text-xl font-montserrat-semibold mb-5">
                    App & Web Interfaces
                  </h3>
                </Reveal>
                <Reveal delay={0.6}>
                  <p className="text-base text-white text-opacity-80 font-montserrat-regular mb-5">
                    I create user-friendly interfaces with a focus on smooth
                    interactions and responsive designs, ensuring an engaging
                    digital experience across platforms.
                  </p>
                </Reveal>
                <Reveal delay={0.8}>
                  <div className="flex flex-wrap gap-3">
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
                </Reveal>
              </div>
              <div>
                <Reveal delay={0.5}>
                  <h3 className="text-white md:text-2xl text-xl font-montserrat-semibold mb-5">
                    API & Database Management
                  </h3>
                </Reveal>
                <Reveal delay={0.7}>
                  <p className="text-base text-white text-opacity-80 font-montserrat-regular mb-5">
                    I develop secure back-end systems and manage databases,
                    ensuring efficient data processing, robust APIs, and
                    seamless system integration.
                  </p>
                </Reveal>
                <Reveal delay={0.8}>
                  <div className="flex flex-wrap gap-3">
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
                </Reveal>
              </div>
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
