import { companyLogos } from "../constants";
// import gsap from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import {
  FigmaLogoIcon,
  FramerLogoIcon,
  SketchLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  VercelLogoIcon,
  NotionLogoIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const LOGOS = [
  <FigmaLogoIcon key={"figma"} width={40} height={40} className="text-color-5/50" />,
  <FramerLogoIcon key={"framer"} width={40} height={40} className="text-color-5/50" />,
  <SketchLogoIcon key={"sketch"} width={40} height={40} className=" text-color-5/50" />,
  <TwitterLogoIcon key={"twitter"} width={40} height={40} className="text-color-5/50" />,
  <GitHubLogoIcon key={"github"} width={40} height={40} className="text-color-5/50" />,
  <VercelLogoIcon key={"vercel"} width={40} height={40} className="text-color-5/50" />,
  <NotionLogoIcon key={"notion"} width={40} height={40} className="text-color-5/50" />,
  <DiscordLogoIcon key={"discord"} width={40} height={40} className="text-color-5/50" />,
  <InstagramLogoIcon key={"instagram"} width={40} height={40} className="text-color-5/50" />,
  <LinkedInLogoIcon key={"linkedIn"} width={40} height={40} className="text-color-5/50" />,
];

const CompanyLogos = ({ className }) => {
  // useGSAP(() => {
  //   gsap.to(".logosDiv", {
  //     xPercent: -100,
  //     duration: 10,
  //     ease: "none",
  //     repeat: -1,
  //     modifiers: {
  //       xPercent: gsap.utils.wrap(-100, 0),
  //     },
  //   });
  // });

  return (
    <div className={`${className} hidden md:block`}>
      <h5 className="tagline mb-6 text-center text-n-1/50 ">
        Helping people create beautiful content at
      </h5>
      {/* <div className="overflow-hidden flex space-x-10 border w-3/4">
        <div className="logosDiv flex space-x-10">
          {companyLogos.map((logo, index) => (
            <li className="flex items-center justify-center h-[8.5rem]" key={index}>
              <img className="min-h-36 min-w-32" src={logo} width={134} height={28} alt={logo} />
            </li>
          ))}
        </div>
        <div className="logosDiv flex space-x-10" aria-hidden="true">
          {companyLogos.map((logo, index) => (
            <li className="flex items-center justify-center h-[8.5rem]" key={index}>
              <img className="min-h-36 min-w-32" src={logo} width={134} height={28} alt={logo} />
            </li>
          ))}
        </div>
      </div> */}
      <div className="rounded-3xl relative m-auto w-[80%] lg:h-[8.5rem] flex items-center  overflow-hidden  before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,#15131D_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,#15131D_0%,rgba(255,255,255,0)_100%)] after:content-[''] ">
        <div className="animate-infinite-slider animation-running flex w-[calc(250px*10)] hover:animation-paused  ">
          {LOGOS.map((logo) => (
            <div className="slide flex w-[125px] items-center justify-center" key={logo.key}>
              {logo}
              {/* {<img className="min-h-36 min-w-32" src={logo} width={134} height={28} alt={logo} />} */}
            </div>
          ))}
          {LOGOS.map((logo, index) => (
            <div className="slide flex w-[125px] items-center justify-center" key={index}>
              {logo}
              {/* {<img className="min-h-36 min-w-32" src={logo} width={134} height={28} alt={logo} />} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
