import Section from "./Section";
import lockSvg from "../assets/lock.svg";
import mailSvg from "../assets/mail.svg";
import bg from "../assets/background-sign.webp";

const Signup = () => {
  return (
    <Section className=" overflow-hidden pt-[4.75rem] lg:pt-[5.25rem] ">
      <div className="relative py-10 lg:py-16 xl:py-20  flex min-h-[calc(100vh-4.8125rem)] overflow-hidden lg:min-h-[calc(100vh-5.3125rem)]">
        <div className="container relative z-2 max-w-[68rem] m-auto lg:flex lg:justify-between  ">
          <div className="max-w-[32.875rem] mx-auto mb-12 text-center md:mb-16 lg:flex lg:flex-col lg:justify-around lg:max-w-[23.75rem] lg:m-0 lg:text-left">
            <h2 className="h2">Join the AI revolution with Brainwave</h2>
            <p className="hidden body-2 mt-4 text-n-4 md:block">
              Get started with Brainwave - AI chat app today and experience the power of AI in your
              conversations!
            </p>
          </div>

          <form
            className="relative max-w-[23.5rem] mx-auto p-0.25 bg-conic-gradient rounded-3xl lg:flex-1 lg:max-w-[27.5rem] lg:m-0 xl:mr-12"
            action=""
          >
            <div className="px-9 py-10 bg-n-8 rounded-[1.4375rem] lg:px-16 lg:py-[3.25rem]">
              <div className="relative mb-4 lg:mb-5">
                <img
                  alt="Mail"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  className="inline-block align-top transition-opacity opacity-100 absolute top-4 left-0 w-6 pointer-events-none"
                  src={mailSvg}
                  style={{ color: "transparent" }}
                />
                <input
                  className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                  placeholder="Name"
                  type="text"
                />
              </div>
              <div className="relative mb-4 lg:mb-5">
                <img
                  alt="Mail"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  className="inline-block align-top transition-opacity opacity-100 absolute top-4 left-0 w-6 pointer-events-none"
                  src={mailSvg}
                  style={{ color: "transparent" }}
                />
                <input
                  className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                  placeholder="Email"
                  type="text"
                />
              </div>
              <div className="relative mb-4 lg:mb-5">
                <img
                  alt="Lock"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  className="inline-block align-top transition-opacity opacity-100 absolute top-4 left-0 w-6 pointer-events-none"
                  src={lockSvg}
                  style={{ color: "transparent" }}
                />
                <input
                  className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                  placeholder="Password"
                  type="text"
                />
              </div>
              <button className="button relative inline-flex items-center justify-center h-11 px-7 text-n-8 transition-colors hover:text-color-1 w-full">
                <span className="relative z-10">Sign up now</span>
                <svg className="absolute top-0 left-0" width="21" height="44" viewBox="0 0 21 44">
                  <path
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
                  ></path>
                </svg>
                <svg
                  className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
                  height="44"
                  viewBox="0 0 100 44"
                  preserveAspectRatio="none"
                  fill="white"
                >
                  <polygon fill="white" fillRule="nonzero" points="100 0 100 44 0 44 0 0"></polygon>
                </svg>
                <svg className="absolute top-0 right-0" width="21" height="44" viewBox="0 0 21 44">
                  <path
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
                  ></path>
                </svg>
              </button>
              <div className="mt-10">
                <div className="caption mb-6 text-n-4 text-center">
                  Or start your Brainwave with
                </div>
                <div className="flex justify-center">
                  <a
                    className="flex items-center justify-center w-12 h-12 mx-3 border border-n-1/5 rounded-full transition-colors hover:border-n-1/15"
                    href="#"
                  >
                    <svg width="24" height="24">
                      <path
                        fill="#757185"
                        d="M23.049 10h-10.5v4.5h5.951c-.951 3-3.3 4-5.999 4a6.5 6.5 0 0 1-5.33-2.768 6.5 6.5 0 0 1-.787-5.954 6.5 6.5 0 0 1 4.428-4.057 6.5 6.5 0 0 1 5.863 1.302l3.27-3.117a11 11 0 0 0-9.931-2.623 11 11 0 0 0-7.768 6.721A11 11 0 0 0 3.414 18.21 11 11 0 0 0 12.501 23c6.066 0 11.55-4 10.548-13z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="flex items-center justify-center w-12 h-12 mx-3 border border-n-1/5 rounded-full transition-colors hover:border-n-1/15"
                    href="#"
                  >
                    <svg width="24" height="24">
                      <path
                        fill="#757185"
                        d="M21.356 16.252c-1.338-.506-2.233-1.721-2.334-3.17-.099-1.412.593-2.666 1.851-3.355l1.046-.573-.747-.93c-1.255-1.563-3.051-2.497-4.804-2.497-1.215 0-2.058.318-2.735.574-.478.181-.855.323-1.269.323-.472 0-.938-.166-1.478-.358-.708-.252-1.51-.538-2.54-.538-1.99 0-3.997 1.188-5.237 3.098-1.851 2.849-1.343 7.734 1.208 11.616 1.011 1.538 2.428 3.305 4.435 3.323h.039c1.643 0 2.003-.876 3.598-.886 1.742.082 1.962.893 3.589.882 1.961-.018 3.375-1.771 4.499-3.484.664-1.007.921-1.534 1.438-2.678l.438-.97-.997-.377zM15.103 3.214c.65-.834 1.143-2.011.964-3.214-1.062.073-2.302.748-3.027 1.628-.658.799-1.201 1.983-.99 3.135 1.158.036 2.357-.656 3.053-1.549z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden absolute top-6 -right-12 bottom-6 xl:flex">
              <div className="w-6 bg-[#1B1B2E] rounded-r-3xl"></div>
              <div className="w-6 my-12 bg-[#1B1B2E]/50 rounded-r-3xl"></div>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="background"
          className="inline-block align-top  transition-opacity opacity-100 w-full h-full object-cover"
        />
      </div>
    </Section>
  );
};

export default Signup;
