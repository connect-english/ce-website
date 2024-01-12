import { FC } from "react";
import { TypeAnimation } from "react-type-animation";

// import ceLogo from "../../assets/icons/connect-english-blue-pink-logo.png";
import globImage from "../../assets/bg/globe.png";
import SocialMedia from "./SocialMedia";
type Props = object;

const Hero: FC<Props> = () => {
  return (
    <div className="md:h-screen">
      <div className="absolute top-0 left-0 hidden w-full h-full md:block bg-ce-blue opacity-70"></div>
      <video
        className="
                    w-full 
                    hidden 
                    md:block 
                    object-cover 
                    h-[100vh]"
        src="https://res.cloudinary.com/dzg8clhcy/video/upload/v1704562539/website/videdo_ondts3.mp4"
        autoPlay
        loop
        muted
      />
      <div
        className="
                    md:w-[70%] 
                    w-full 
                    md:absolute 
                    relative 
                    left-0 top-0 
                    bg-ce-white 
                    md:h-[1000px]
                    h-[700px]
                    lg:h-[700px]
                    md:rounded-br-[80%] 
                    p-5
                    md:p-10 
                    lg:pl-32"
      >
        <div className="absolute w-full">
          <img
            className="
                            md:w-[70%] 
                            mt-[150px] 
                            opacity-50"
            src={globImage}
            alt=""
          />
        </div>
        <div
          className="
                        w-full 
                        h-full 
                        relative
                        items-center 
                        mt-[100px]
                        md:mt-24"
        >
          {/* <div className="flex justify-center w-full mt-10 md:20 md:justify-start mt">
            <img className="w-[150px]" src={ceLogo} alt="" />
          </div> */}
          <div className="h-20 mt-10 text-3xl font-bold lg:mt-28 md:h-32 text-ce-blue md:text-5xl">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "We teach English for beginners",
                1000,
                "We teach English for intermediate learners",
                1000,
                "We teach English for advanced students",
                1000,
                "We dive into English for academic success",
                1000,
              ]}
              speed={50}
              style={{}}
              repeat={Infinity}
            />

            {/* <p className='text-5xl font-bold text-ce-blue'>
                            What is Lorem Ipsum?
                        </p> */}
          </div>
          <div className="md:w-[80%] w-full mt-4 lg:mt-0 text-ce-blue font-semibold">
            <p className="md:text-xl lg:text-base">
              Connect English is committed to transforming lives through higher
              education with English e-courses. At Connect English, our vision
              is to empower students by providing affordable and
              high quality e-courses tailored for success in the International
              English Language Testing System (IELTS) and Business English. Our
              specialized programs focus on essential skills such as customer
              service, telesales, relationship management, project management
              and management-level preparation, ensuring that students are
              well-equipped for international career opportunities.
            </p>
          </div>
          <div className="mt-10 lg:mt-16 md:mt-2">
            <SocialMedia />
          </div>
        </div>
        {/* <div className='pt-5 md:w-[50%] w-full z-10'>
                    <FormHero />
                </div> */}
      </div>
    </div>
  );
};

export default Hero;
