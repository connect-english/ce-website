import { FC } from "react";

import visionIcon from "../../assets/icons/vision.png";
import misionIcon from "../../assets/icons/mision.png";

type Props = object;

const VisionMision: FC<Props> = () => {
  return (
    <div className="w-full">
      <div className="relative items-center justify-between w-full h-full px-5 md:flex lg:px-32">
        <div className="grid w-full grid-cols-2 gap-4">
          {/* Vision */}
          <div className="items-center w-full col-span-2 p-5 border rounded-lg shadow md:col-span-1 bg-ce-white hover:bg-ce-light-gray">
            <div className="flex justify-center w-full border-gray-200">
              <img className="h-[100px]" src={visionIcon} alt="Vision" />
            </div>
            <div>
              <h2 className="mt-5 text-4xl font-bold text-center text-ce-blue">
                Our Vision
              </h2>
              <p className="mt-5 lg:text-base md:text-xl text-ce-gray">
                Connect English envisions a world where education transcends
                borders, empowering individuals in Sri Lanka and beyond to
                achieve their full potential. We aspire to be a beacon of
                accessible and top-quality English e-courses, fostering global
                citizens equipped with the skills and knowledge to excel in
                international career opportunities. Our vision is to inspire
                transformative learning experiences that open doors to a world
                of possibilities.
              </p>
            </div>
          </div>
          {/* Mision */}
          <div className="items-center w-full col-span-2 p-5 border rounded-lg shadow md:col-span-1 bg-ce-white hover:bg-ce-light-gray">
            <div className="flex justify-center w-full border-gray-200">
              <img className="h-[100px]" src={misionIcon} alt="Vision" />
            </div>
            <div>
              <h2 className="mt-5 text-4xl font-bold text-center text-ce-blue">
                Our Mission
              </h2>
              <p className="mt-5 text-ce-gray lg:text-base md:text-xl">
                At Connect English, our mission is to transform lives through
                innovative and affordable educational pathways. We are dedicated
                to providing high-quality English e-courses tailored for success
                in critical areas such as the International English Language
                Testing System (IELTS) and Business English. Through our
                specialized programs, which focus on essential skills like
                customer service, telesales, relationship management, project
                management, and management-level preparation, we aim to equip
                students with the tools necessary for success on the global
                stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMision;
