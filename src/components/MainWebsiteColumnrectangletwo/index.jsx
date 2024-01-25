import React from "react";

import { Text } from "components";

const MainWebsiteColumnrectangletwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="gap-12 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start my-[47px] w-auto md:w-full">
          <div className="bg-white-A700_a2 flex flex-col gap-[32.77px] h-[442px] md:h-auto items-start justify-start p-[24.58px] sm:px-5 shadow-bs w-full">
            <div className="flex flex-row gap-[16.38px] items-center justify-start w-auto">
              <div className="bg-teal-700 h-[26px] w-[7%]"></div>
              <Text
                className="text-[16.38px] text-black-900 text-center w-auto"
                size="txtPoppinsBold1638"
              >
                {props?.noticeboard}
              </Text>
            </div>
            <div className="flex flex-col gap-[13.82px] items-start justify-start p-[5.12px] w-auto">
              <Text
                className="text-[16.38px] text-center text-teal-700 w-auto"
                size="txtPoppinsRegular1638"
              >
                {props?.date}
              </Text>
              <Text
                className="leading-[16.00px] max-w-[298px] md:max-w-full text-[16.38px] text-gray-800"
                size="txtPoppinsRegular1638Gray800"
              >
                {props?.acrobateducon}
              </Text>
            </div>
            <div className="flex flex-col gap-[13.82px] items-start justify-start p-[5.12px] w-auto">
              <Text
                className="text-[16.38px] text-center text-teal-700 w-auto"
                size="txtPoppinsRegular1638"
              >
                {props?.dateOne}
              </Text>
              <Text
                className="leading-[16.00px] max-w-[298px] md:max-w-full text-[16.38px] text-gray-800"
                size="txtPoppinsRegular1638Gray800"
              >
                {props?.acrobateduconOne}
              </Text>
            </div>
            <div className="flex flex-col gap-[13.82px] items-start justify-start p-[5.12px] w-auto">
              <Text
                className="text-[16.38px] text-center text-teal-700 w-auto"
                size="txtPoppinsRegular1638"
              >
                {props?.dateTwo}
              </Text>
              <Text
                className="leading-[16.00px] max-w-[298px] md:max-w-full text-[16.38px] text-gray-800"
                size="txtPoppinsRegular1638Gray800"
              >
                {props?.acrobateduconTwo}
              </Text>
            </div>
            <Text
              className="text-[16.38px] text-center text-gray-800_01 w-auto"
              size="txtPoppinsRegular1638Gray80001"
            >
              {props?.seeall}
            </Text>
          </div>
          <div className="bg-white-A700_a2 flex flex-col gap-[44.8px] h-[442px] md:h-auto items-start justify-start p-[24.58px] sm:px-5 shadow-bs w-full">
            <div className="flex flex-row gap-[16.38px] items-center justify-start w-auto">
              <div className="bg-teal-700 h-[26px] w-[6%]"></div>
              <Text
                className="text-[16.38px] text-black-900 text-center w-auto"
                size="txtPoppinsBold1638"
              >
                {props?.noticeboardOne}
              </Text>
            </div>
            <Text
              className="text-[16.38px] text-center text-gray-800_01 w-auto"
              size="txtPoppinsRegular1638Gray80001"
            >
              {props?.seeallOne}
            </Text>
          </div>
          <div className="bg-white-A700_a2 flex flex-col gap-[32.77px] h-[442px] md:h-auto items-start justify-start p-[24.58px] sm:px-5 shadow-bs w-full">
            <div className="flex flex-row gap-[16.38px] items-center justify-start w-auto">
              <div className="bg-teal-700 h-[26px] w-[7%]"></div>
              <Text
                className="text-[16.38px] text-black-900 text-center w-auto"
                size="txtPoppinsBold1638"
              >
                {props?.noticeboardTwo}
              </Text>
            </div>
            <div className="flex flex-col gap-[13.82px] items-start justify-start p-[5.12px] w-auto">
              <Text
                className="text-[16.38px] text-center text-teal-700 w-auto"
                size="txtPoppinsRegular1638"
              >
                {props?.dateThree}
              </Text>
              <Text
                className="leading-[16.00px] max-w-[298px] md:max-w-full text-[16.38px] text-gray-800"
                size="txtPoppinsRegular1638Gray800"
              >
                {props?.acrobateduconThree}
              </Text>
            </div>
            <div className="flex flex-col gap-[13.82px] items-start justify-start p-[5.12px] w-auto">
              <Text
                className="text-[16.38px] text-center text-teal-700 w-auto"
                size="txtPoppinsRegular1638"
              >
                {props?.dateFour}
              </Text>
              <Text
                className="leading-[16.00px] max-w-[298px] md:max-w-full text-[16.38px] text-gray-800"
                size="txtPoppinsRegular1638Gray800"
              >
                {props?.acrobateduconFour}
              </Text>
            </div>
            <div className="flex flex-col gap-[13.82px] items-start justify-start p-[5.12px] w-auto">
              <Text
                className="text-[16.38px] text-center text-teal-700 w-auto"
                size="txtPoppinsRegular1638"
              >
                {props?.dateFive}
              </Text>
              <Text
                className="leading-[16.00px] max-w-[298px] md:max-w-full text-[16.38px] text-gray-800"
                size="txtPoppinsRegular1638Gray800"
              >
                {props?.acrobateduconFive}
              </Text>
            </div>
            <Text
              className="text-[16.38px] text-center text-gray-800_01 w-auto"
              size="txtPoppinsRegular1638Gray80001"
            >
              {props?.seeallTwo}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

MainWebsiteColumnrectangletwo.defaultProps = {
  noticeboard: "Notice board",
  date: "17 February 2024",
  acrobateducon: "“Acrobat Educon conference” on Climate Change research.",
  dateOne: "17 February 2024",
  acrobateduconOne: "“Acrobat Educon conference” on Climate Change research.",
  dateTwo: "17 February 2024",
  acrobateduconTwo: "“Acrobat Educon conference” on Climate Change research.",
  seeall: <>See All Notices &gt;</>,
  noticeboardOne: "Upcoming events",
  seeallOne: <>See All Events &gt;</>,
  noticeboardTwo: "Notice board",
  dateThree: "17 February 2024",
  acrobateduconThree: "“Acrobat Educon conference” on Climate Change research.",
  dateFour: "17 February 2024",
  acrobateduconFour: "“Acrobat Educon conference” on Climate Change research.",
  dateFive: "17 February 2024",
  acrobateduconFive: "“Acrobat Educon conference” on Climate Change research.",
  seeallTwo: <>See all &gt;</>,
};

export default MainWebsiteColumnrectangletwo;
