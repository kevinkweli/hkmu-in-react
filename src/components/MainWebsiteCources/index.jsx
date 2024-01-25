import React from "react";

import { Button, Img, List, Text } from "components";

const MainWebsiteCources = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_cources.png')" }}
      >
        <div className="flex flex-col items-center justify-center max-w-[1512px] px-2.5 py-4 w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
            size="txtPoppinsMedium32"
          >
            {props?.academicstext}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[1512px] p-2.5 w-full">
          <Text
            className="text-[22px] text-center sm:text-lg text-white-A700 md:text-xl w-auto"
            size="txtPoppinsRegular22"
          >
            {props?.descriptiontwotext}
          </Text>
        </div>
        <List
          className="sm:flex-col flex-row gap-[28.8px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mb-[136px] mt-[92px] w-auto md:w-full"
          orientation="horizontal"
        >
          <div className="bg-white-A700 flex flex-col gap-[23.4px] h-[401px] md:h-auto items-center justify-start pb-[14.4px] px-[10.8px] shadow-bs2 w-[278px]">
            <Img
              className="h-[162px] sm:h-auto object-cover w-[278px] md:w-full"
              src="images/img_rectangle3.png"
              alt="rectangleThree"
            />
            <div className="flex flex-col gap-[14.4px] items-start justify-start px-[6.3px] py-[3.6px] w-full">
              <div className="flex flex-col gap-[7.2px] items-start justify-start w-full">
                <Text
                  className="sm:text-[17.6px] md:text-[19.6px] text-[21.6px] text-black-900_01 w-auto"
                  size="txtPoppinsSemiBold216"
                >
                  {props?.facultyofmedicinetext}
                </Text>
                <Text
                  className="leading-[18.00px] max-w-[244px] md:max-w-full text-[9.9px] text-gray-800_01"
                  size="txtPoppinsRegular99"
                >
                  {props?.descriptiontext}
                </Text>
              </div>
              <Button
                className="!text-white-A700_01 cursor-pointer font-medium font-poppins min-w-[114px] text-[10.3px] text-center"
                shape="square"
                color="teal_700"
                size="xs"
                variant="fill"
              >
                {props?.viewmorebutton}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col gap-[23.4px] h-[401px] md:h-auto items-center justify-start pb-[14.4px] px-[10.8px] shadow-bs2 w-[278px]">
            <Img
              className="h-[162px] sm:h-auto object-cover w-[278px] md:w-full"
              src="images/img_rectangle3_162x278.png"
              alt="rectangleThree"
            />
            <div className="flex flex-col gap-[14.4px] items-start justify-start px-[6.3px] py-[3.6px] w-full">
              <div className="flex flex-col gap-[7.2px] items-start justify-start w-full">
                <Text
                  className="sm:text-[17.6px] md:text-[19.6px] text-[21.6px] text-black-900_01 w-auto"
                  size="txtPoppinsSemiBold216"
                >
                  {props?.facultyofnursingtext}
                </Text>
                <Text
                  className="leading-[18.00px] max-w-[244px] md:max-w-full text-[9.9px] text-gray-800_01"
                  size="txtPoppinsRegular99"
                >
                  {props?.descriptiontext1}
                </Text>
              </div>
              <Button
                className="!text-white-A700_01 cursor-pointer font-medium font-poppins min-w-[114px] text-[10.3px] text-center"
                shape="square"
                color="teal_700"
                size="xs"
                variant="fill"
              >
                {props?.viewmorebutton1}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col gap-[23.4px] h-[401px] md:h-auto items-center justify-start pb-[14.4px] px-[10.8px] shadow-bs2 w-[278px]">
            <Img
              className="h-[162px] sm:h-auto object-cover w-[278px] md:w-full"
              src="images/img_rectangle3_1.png"
              alt="rectangleThree"
            />
            <div className="flex flex-col gap-3 items-start justify-start px-[6.3px] w-full">
              <div className="flex flex-col gap-[7.2px] items-start justify-start w-full">
                <Text
                  className="leading-[28.00px] max-w-[244px] md:max-w-full sm:text-[17.6px] md:text-[19.6px] text-[21.6px] text-black-900_01"
                  size="txtPoppinsSemiBold216"
                >
                  {props?.postgraduateandresearchtext}
                </Text>
                <Text
                  className="leading-[18.00px] max-w-[244px] md:max-w-full text-[9.9px] text-gray-800_01"
                  size="txtPoppinsRegular99"
                >
                  {props?.descriptiontext2}
                </Text>
              </div>
              <Button
                className="!text-white-A700_01 cursor-pointer font-medium font-poppins min-w-[114px] text-[10.3px] text-center"
                shape="square"
                color="teal_700"
                size="xs"
                variant="fill"
              >
                {props?.viewmorebutton2}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col gap-[23.4px] h-[401px] md:h-auto items-center justify-start pb-[14.4px] px-[10.8px] shadow-bs2 w-[278px]">
            <Img
              className="h-[162px] sm:h-auto object-cover w-[278px] md:w-full"
              src="images/img_rectangle3_2.png"
              alt="rectangleThree"
            />
            <div className="flex flex-col gap-[14.4px] items-start justify-start px-[6.3px] py-[3.6px] w-full">
              <div className="flex flex-col gap-[7.2px] items-start justify-start w-full">
                <Text
                  className="sm:text-[17.6px] md:text-[19.6px] text-[21.6px] text-black-900_01 w-auto"
                  size="txtPoppinsSemiBold216"
                >
                  {props?.socialworkstext}
                </Text>
                <Text
                  className="leading-[18.00px] max-w-[244px] md:max-w-full text-[9.9px] text-gray-800_01"
                  size="txtPoppinsRegular99"
                >
                  {props?.descriptiontext3}
                </Text>
              </div>
              <Button
                className="!text-white-A700_01 cursor-pointer font-medium font-poppins min-w-[114px] text-[10.3px] text-center"
                shape="square"
                color="teal_700"
                size="xs"
                variant="fill"
              >
                {props?.viewmorebutton3}
              </Button>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

MainWebsiteCources.defaultProps = {
  academicstext: "ACADEMICS",
  descriptiontwotext: (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      <br />
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum
      laboruma
    </>
  ),
  facultyofmedicinetext: "Faculty of Medicine ",
  descriptiontext:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat",
  viewmorebutton: "View more",
  facultyofnursingtext: "Faculty of Nursing",
  descriptiontext1:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat",
  viewmorebutton1: "View more",
  postgraduateandresearchtext: "Postgraduate and Research",
  descriptiontext2:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat",
  viewmorebutton2: "View more",
  socialworkstext: "Social Works",
  descriptiontext3:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat",
  viewmorebutton3: "View more",
};

export default MainWebsiteCources;
