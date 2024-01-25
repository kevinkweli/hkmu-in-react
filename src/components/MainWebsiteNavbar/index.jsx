import React from "react";

import { Img, Text } from "components";

const MainWebsiteNavbar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[15.46px] items-center justify-start px-[2.81px] w-auto">
          <div className="flex flex-col items-start justify-start p-[2.81px] w-auto">
            <Img
              className="h-[70px] md:h-auto object-cover w-[51px]"
              src="images/img_hkmulogo11.png"
              alt="hkmulogoEleven"
            />
          </div>
          <Img
            className="h-[39px] w-[211px]"
            src="images/img_words.svg"
            alt="words"
          />
        </div>
        <div className="flex sm:flex-col flex-row gap-6 items-center justify-between max-w-[661px] px-3 py-[25px] w-full">
          <Text
            className="text-sm text-teal-700 w-auto"
            size="txtPoppinsSemiBold14"
          >
            {props?.home}
          </Text>
          <Text
            className="text-gray-800 text-sm w-auto"
            size="txtPoppinsMedium14"
          >
            {props?.abouthkmu}
          </Text>
          <Text
            className="text-gray-800 text-sm w-auto"
            size="txtPoppinsMedium14"
          >
            {props?.academicsadmissOne}
          </Text>
          <Text
            className="text-gray-800 text-sm w-auto"
            size="txtPoppinsMedium14"
          >
            {props?.newsevents}
          </Text>
          <Text
            className="text-gray-800 text-sm w-auto"
            size="txtPoppinsMedium14"
          >
            {props?.students}
          </Text>
          <Text
            className="text-gray-800 text-sm w-auto"
            size="txtPoppinsMedium14"
          >
            {props?.references}
          </Text>
        </div>
      </div>
    </>
  );
};

MainWebsiteNavbar.defaultProps = {
  home: "Home",
  abouthkmu: "About HKMU",
  academicsadmissOne: "Academics & admissions",
  newsevents: "News & Events",
  students: "Students",
  references: "References",
};

export default MainWebsiteNavbar;
