import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useEffect } from "react";

const Benefits = () => {
  const arrowRefs = useRef([]);
  const setArrowRef = (element, index) => {
    arrowRefs.current[index] = element;
  };
  useEffect(() => {
    arrowRefs.current.forEach((arrowRef) => {
      if (arrowRef) {
        const handleMouseMove = () => {
          // console.log(arrowRef);
          // Clear the previous path
          // gsap.set(arrowRef, {
          //   attr: {
          //     d: "",
          //   },
          // });

          // Apply the new path
          gsap.to(arrowRef, {
            attr: {
              d: `M494.259,0H210.505c-9.801,0-17.735,7.933-17.735,17.735c0,9.801,7.933,17.735,17.735,17.735h240.931L5.196,481.721 c-6.928,6.928-6.928,18.148,0,25.077c6.928,6.928,18.148,6.928,25.077,0L476.525,60.546v240.943 c0,9.801,7.933,17.735,17.735,17.735c9.801,0,17.735-7.933,17.735-17.735V17.735C511.994,7.933,504.061,0,494.259,0z`,
            },
            duration: .3,
            ease: "power2.out",
          });
        };

      //   const handleMouseLeave = () => {
      //     gsap.to(arrowRef, {
      //       attr: {
      //         d: `M508.245,246.953L363.435,102.133c-5.001-5.001-13.099-5.001-18.099,0c-5.001,5-5.001,13.099,0,18.099l122.965,122.965
			// H12.8c-7.074,0-12.8,5.726-12.8,12.8c0,7.074,5.726,12.8,12.8,12.8h455.492L345.327,391.763c-5.001,5-5.001,13.099,0,18.099
			// c5.009,5.001,13.099,5.001,18.108,0l144.811-144.811C513.246,260.051,513.246,251.953,508.245,246.953z`,
      //       },
      //       duration: 2,
      //       ease: "power2.out",
      //     });
      //   };
        arrowRef.addEventListener("mouseleave", handleMouseMove);
        // arrowRef.addEventListener("mouseleave", handleMouseLeave);
        
        // Cleanup function to remove event listener
        return () => {
          arrowRef.removeEventListener("mouseleave", handleMouseMove);
          // arrowRef.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    });
  }, []);

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className="flex flex-wrap gap-10 mb-10 justify-center">
          {benefits.map((item, index) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] "
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img src={item.iconUrl} width={48} height={48} alt={item.title} />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider ">
                    Explore more
                  </p>
                  <Arrow ref={(element) => setArrowRef(element, index)} />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div className="absolute inset-0.5 bg-n-8 " style={{ clipPath: "url(#benefits)" }} >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
