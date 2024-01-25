import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const MainWebsiteFooter = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-[81%] md:w-full">
            <div className="flex flex-row gap-[16.8px] items-center justify-start mb-1 sm:mt-0 mt-4 w-auto">
              <div className="flex flex-col items-start justify-start p-[3px] w-auto">
                <Img
                  className="h-[75px] md:h-auto object-cover w-[55px]"
                  src="images/img_hkmulogo11.png"
                  alt="hkmulogoEleven_One"
                />
              </div>
              <Img
                className="h-[41px] w-[225px]"
                src="images/img_words_blue_200.svg"
                alt="words_One"
              />
            </div>
            <div className="flex flex-row items-start justify-between w-[23%] sm:w-full">
              <Img
                className="h-[71px] mt-[17px]"
                src="images/img_info.svg"
                alt="info"
              />
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[71px] items-start justify-start mt-[17px] p-3"
                style={{ backgroundImage: "url('images/img_face.svg')" }}
              >
                <Img
                  className="h-11 md:ml-[0] ml-[3px]"
                  src="images/img_facebook.svg"
                  alt="facebook"
                />
              </div>
              <div className="flex flex-col items-center justify-end py-[13px]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[71px] items-center justify-end mt-1 p-[13px] w-full"
                  style={{ backgroundImage: "url('images/img_face.svg')" }}
                >
                  <Img
                    className="h-11"
                    src="images/img_twitter.svg"
                    alt="twitter"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[49px] items-center justify-start mt-4 w-4/5 md:w-full">
            <Line className="bg-gray-200 h-px w-full" />
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              {props?.connectwithustext}
              {props?.resourcestext}
              <div className="flex flex-col gap-[19px] items-start justify-start w-[348px]">
                <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                  <Text
                    className="text-[15.75px] text-white-A700 w-[86px]"
                    size="txtPoppinsSemiBold1575"
                  >
                    {props?.newslettertext}
                  </Text>
                  <Text
                    className="max-w-[283px] md:max-w-full text-sm text-white-A700"
                    size="txtPoppinsRegular14"
                  >
                    {props?.newsletterdescriptiontext}
                  </Text>
                </div>
                <Input
                  name="frame35633"
                  placeholder="Your email"
                  className="!placeholder:text-blue_gray-100 !text-blue_gray-100 font-poppins leading-[normal] md:h-auto p-0 sm:h-auto text-left text-sm w-full"
                  wrapClassName="w-full"
                  shape="square"
                  color="gray_700"
                  size="xs"
                  variant="fill"
                ></Input>
                <Button
                  className="!text-white-A700_01 cursor-pointer font-medium font-poppins min-w-[102px] text-[9.98px] text-center"
                  shape="square"
                  color="black_900"
                  size="xs"
                  variant="fill"
                >
                  {props?.subscribebutton}
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-teal-900_01 flex flex-col items-center justify-start mt-[21px] p-[18px] w-full">
            <Text
              className="mb-2 text-[14.7px] text-center text-white-A700"
              size="txtInterRegular147"
            >
              {props?.universitynametext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

MainWebsiteFooter.defaultProps = {
  connectwithustext: (
    <Text
      className="leading-[135.00%] text-[15.75px] text-white-A700"
      size="txtSairaRomanSemiBold1575"
    >
      <span className="text-white-A700 font-poppins text-left font-black">
        <>
          Connect with us
          <br />
          <br />
        </>
      </span>
      <span className="text-white-A700 font-poppins text-left font-semibold">
        <>
          70 Chwaku Streat - Mikocheni, <br />
          P.O. Box 65300, <br />
          Dar Es Salaam, Tanzania.
          <br />
          <br />
          Mobile: 255-22-2700021/4
          <br />
          Fax: 255-22-2775591
          <br />
          <br />
          Email: vc@hkmu.ac.tz <br /> info@hkmu.ac.tz
        </>
      </span>
    </Text>
  ),
  resourcestext: (
    <Text
      className="leading-[135.00%] text-[14.7px] text-white-A700"
      size="txtPoppinsSemiBold147"
    >
      <span className="text-white-A700 font-poppins text-left text-[15.75px] font-black">
        <>
          Resources
          <br />
          <br />
        </>
      </span>
      <span className="text-white-A700 font-poppins text-left font-semibold">
        <>
          Forms and Admission materials
          <br />
          Guidance Documents
          <br />
          Hardcopy
          <br />
          FAQs
          <br />
          Professional Education
          <br />
          Courses in Education
        </>
      </span>
    </Text>
  ),
  newslettertext: "Newsletter",
  newsletterdescriptiontext:
    "Sign up for our newsletter and join the HKMU community",
  subscribebutton: "Subsribe",
  universitynametext: "Hubert Kariuki Memorial University - 2024",
};

export default MainWebsiteFooter;
