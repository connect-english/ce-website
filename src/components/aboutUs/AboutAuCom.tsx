import { FC } from "react";

import bgImage from "../../assets/page_bg/About.png";

import { FaHandshake } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { FaPlaneDeparture } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { FaPeopleRoof } from "react-icons/fa6";

type Props = object;

const AboutAuCom: FC<Props> = () => {
  return (
    <div className="w-full  mt-[100px]">
      <div className="w-full h-full bg-slate-500 ">
        <div className="w-full h-full px-5 bg-ce-white text-ce-blue md:flex lg:px-32">
          <div className="w-full ">
            <div className="grid w-full grid-cols-2 gap-4">
              <div className="col-span-2 py-10 lg:col-span-1">
                <div className="flex items-center w-full h-full md:justify-center">
                  <img className="w-full md:w-[500px]" src={bgImage} alt="about us" />
                </div>
              </div>
              <div className="col-span-2 lg:py-10 lg:col-span-1">
                <div>

                </div>
                <h1 className="text-3xl font-bold text-ce-blue">About Us</h1>
                <p className="mt-5 lg:text-base md:text-2xl">
                  Connect English is committed to transforming lives through higher
                  education with English e-courses. At Connect English, our vision is
                  to empower students in Sri Lanka by providing affordable and high
                  quality e-courses tailored for success in the International English
                  Language Testing System (IELTS) and Business English. Our
                  specialized programs focus on essential skills such as customer
                  service, telesales, relationship management, project management and
                  management-level preparation, ensuring that students are
                  well-equipped for international career opportunities.
                </p>
                <p className="mt-5 lg:text-base md:text-2xl">
                  Connect English is not just an educational platform; it is a gateway
                  to a world of possibilities. We are also a part of the connect group
                  which provides consulting services for business as well as
                  international life coaching.
                </p>
                <p className="mt-5 lg:text-base md:text-2xl">
                  For international students, Connect Group extends its commitment to
                  affordable and accessible education beyond English language
                  proficiency. Our e-learning courses encompass a wide range of
                  subjects, including IELTS preparation, Engineering, Robotics,
                  Accounting, and Advanced Mathematics. By providing comprehensive and
                  globally relevant courses, Connect Group aims to support
                  international students in achieving their academic and professional
                  aspirations.
                </p>
              </div>

              <div className="col-span-2 p-5 rounded-xl lg:col-span-1 bg-ce-light-gray">
                <div className="w-full p-2 ">
                  <div className="flex items-center justify-center space-x-2 text-2xl">
                    <FaHandshake className='text-5xl text-ce-pink' />
                    <h2 className="font-bold ">Our Commitment </h2>
                  </div>
                  <p className="mt-7 lg:text-base md:text-2xl ">Accessible Education: We believe that education should have no bounds. We strive to break down barriers by providing accessible e-courses that transcend geographical limitations, enabling students to embark on their educational journey from the comfort of their homes.
                    Top-Quality Instruction: Quality is at the core of everything we do. Our courses are meticulously designed and delivered by experienced instructors, ensuring that students receive top-notch education that aligns with international standards.
                  </p>
                </div>
              </div>

              <div className="col-span-2 p-5 rounded-xl lg:col-span-1 bg-ce-light-gray">
                <div className="w-full p-2 ">
                  <div className="flex items-center justify-center space-x-2 text-2xl">
                    <IoIosSchool className='text-5xl text-ce-pink'  />
                    <h2 className="text-2xl font-bold ">Specialized Programs</h2>
                  </div>
                  <p className="mt-5 lg:text-base md:text-2xl">Business English: Tailored for success in the business world, our Business English programs focus on essential skills such as customer service, telesales, relationship management, project management, and management-level preparation. We go beyond language proficiency, providing students with the practical skills needed to thrive in international career settings.</p>
                  <p className="mt-5 lg:text-base md:text-2xl ">IELTS Preparation: Our IELTS preparation courses are designed to equip students with the language proficiency necessary to excel in the international arena, opening doors to global educational and professional opportunities. </p>
                </div>
              </div>
        
              <div className="col-span-2 p-5 rounded-xl lg:col-span-1 bg-ce-light-gray">
                <div className="w-full p-2 mt-5 ">
                  <div className="flex items-center justify-center space-x-2 text-2xl">
                    <FaPlaneDeparture className='text-5xl text-ce-pink'/>
                    <h2 className="text-2xl font-bold ">International Career Readiness</h2>
                  </div>
                  <p className="mt-5 lg:text-base md:text-2xl">Essential Skills Development: Connect English goes beyond traditional language learning. Our specialized programs focus on developing essential skills crucial for success in today's globalized job market, ensuring that students are well-prepared for international career opportunities.
                  </p>
                </div>
              </div>

              <div className="col-span-2 p-5 rounded-xl lg:col-span-1 bg-ce-light-gray">
                <div className="w-full p-2 mt-5 ">
                  <div className="flex items-center justify-center space-x-2 text-2xl">
                    <TbTargetArrow className='text-5xl text-ce-pink'/>
                    <h2 className="text-2xl font-bold ">Empowering Dreams</h2>
                  </div>
                  <p className="mt-5 lg:text-base md:text-2xl">International Study and Work Opportunities: We believe in nurturing talent and providing students with international experiences that catalyze personal and professional growth. We are also a part of the connect group which provides consulting services for business as well as international life coaching. For our top-performing students, Connect English opens doors for our top-performing students, offering them international study and work opportunities through our partnerships with esteemed higher education colleges. These collaborations provide students with international experiences, enabling them to grow and excel in their chosen careers                </p>
                </div>
              </div>

              <div className="col-span-2">
                <div className="flex justify-center w-full">
                  <div className="w-[50%]  bg-ce-light-gray rounded-xl">
                    <div className="w-full p-2">
                      <div  className="h-[56px] py-12 flex items-center justify-center space-x-2 text-2xl">
                        <FaPeopleRoof className='text-5xl text-ce-pink'/>
                        <h2 className="text-2xl font-bold ">Join Connect English and Unleash Your Potential</h2>
                      </div>
                      {/* <p className="mt-5 lg:text-base md:text-2xl">Embark on a journey of academic and professional excellence with Connect English. We invite you to be a part of our global community, where learning knows no boundaries, and opportunities abound. Connect English - Where Education Transforms Lives.</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAuCom;
